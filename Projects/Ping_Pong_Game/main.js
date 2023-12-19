// Selecting Elements
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const panel = document.querySelector(".panel");
const play = document.querySelector(".play");
const mode = document.querySelector("input[type=text]");
const modeValues = document.querySelectorAll(".mode");
const statPanel = document.querySelector(".stat");

const comScore = new Audio();
comScore.src = "comScore.mp3";
const userScore = new Audio();
userScore.src = "userScore.mp3";

// User choosing the mode.
modeValues.forEach((modeValue) => {
    modeValue.addEventListener("click", () => {
        modeValues.forEach((index) => {
            index.classList.remove("selected");
        });
        modeValue.classList.add("selected");
        let value = modeValue.dataset.number;
        mode.value = value;
    });
});
let compSpeed; // The computer speed which selects the dataset of mode.

canvas.width = 600;
canvas.height = 400;

let user = {
    width: 10,
    height: 100,
    color: "white",
    x: 10,
    y: (canvas.height - 100) / 2,
    score: 0,
};

let computer = {
    width: 10,
    height: 100,
    color: "white",
    x: canvas.width - 20,
    y: (canvas.height - 100) / 2,
    score: 0,
};

let ball = {
    radius: 10,
    velocity: {
        x: 7,
        y: 7,
    },
    speed: 7,
    color: "white",
    x: canvas.width / 2,
    y: canvas.height / 2,
};

let net = {
    x: (canvas.width - 2) / 2,
    y: 0,
    color: "white",
    width: 2,
    height: 10,
};

// Function for drawing rectangle, circle, text, net.
function drawRect(x, y, w, h, c) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.fillRect(x, y, w, h);
    ctx.closePath();
}

function drawArc(x, y, r, c) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function drawText(text, x, y) {
    ctx.font = "75px arial";
    ctx.fillStyle = "white";
    ctx.fillText(text, x, y);
}

function drawNet() {
    for (let i = 0; i < canvas.width; i += 15) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

// Method template for particle.
class Particle {
    constructor(x, y, color, radius, velocity) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.velocity = velocity;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.abs(this.radius), 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.radius -= 0.01;
        this.draw();
    }
}

// User Paddle movement.
canvas.addEventListener("mousemove", (e) => {
    let rect = canvas.getBoundingClientRect().top;
    user.y = e.clientY - rect - user.height / 2;
});

canvas.addEventListener("touchmove", (e) => {
    let rect = canvas.getBoundingClientRect().top;
    user.y = e.changedTouches[0].clientY - rect - user.height / 2;
});

canvas.addEventListener("touchstart", (e) => {
    let rect = canvas.getBoundingClientRect().top;
    user.y = e.changedTouches[0].clientY - rect - user.height / 2;
});

// Collision detection.
function collision(b, p) {
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    return (
        p.left < b.right &&
        p.top < b.bottom &&
        p.right > b.left &&
        p.bottom > b.top
    );
}

// Resetting the ball
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speed = 0;
    ball.velocity.y = 0;
    ball.velocity.x = 0;

    timeout = setTimeout(() => {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.speed = 7;
        ball.velocity.y = Math.random() < 0.5 ? 7 : -7;
        ball.velocity.x = Math.random() < 0.5 ? 7 : -7;
        console.log("g");
    }, 1500);
}

// GameOver Function.
function gameOver() {
    let stat;
    let maxScore = 10;

    // These codes match with both players.
    function commonCodes() {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.speed = 0;
        cancelAnimationFrame(gameId);
        panel.classList.add("reveal");
    }
    if (user.score >= maxScore) {
        stat = "You Won!";
        commonCodes();
    } else if (computer.score >= maxScore) {
        stat = "You Lost!";
        commonCodes();
    }
    statPanel.textContent = stat; // Stat comes to stat panel.
}

// Draw Function for drawing the board.
function draw() {
    drawRect(0, 0, canvas.width, canvas.height, "#089c29");
    drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect(
        computer.x,
        computer.y,
        computer.width,
        computer.height,
        computer.color
    );
    drawArc(ball.x, ball.y, ball.radius, ball.color);
    drawNet();
    drawText(user.score, canvas.width / 4, canvas.height / 5);
    drawText(computer.score, (3 * canvas.width) / 4, canvas.height / 5);
}

let gameId; // The id which will terminate and initiate the game.
let timeout; // The variable for the interval of the ball.
let particles = [];
function game() {
    gameId = requestAnimationFrame(game);
    draw();
    gameOver();

    // Collision detection for top and bottom wall.
    if (
        ball.y + ball.radius + ball.velocity.y > canvas.height ||
        ball.y - ball.radius < 0
    ) {
        ball.velocity.y = -ball.velocity.y;
    }

    // Collision detection for left and right wall.
    if (ball.x + ball.radius + ball.velocity.x > canvas.width) {
        // If ball touches right wall, user gets a point.
        resetBall();
        userScore.play();
        console.log(userScore);
        user.score += 1;
    } else if (ball.x - ball.radius < 0) {
        // Else if the ball touches left wall, computer gets a point.
        resetBall();
        comScore.play();
        console.log(comScore);
        computer.score += 1;
    }

    // Increasing the ball's position.
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;

    // AI.
    computer.y += (ball.y - (computer.y + computer.height / 2)) * compSpeed;

    // Which player will hit now.
    let player = ball.x + ball.radius < canvas.width / 2 ? user : computer;

    // If collision occurs,
    if (collision(ball, player)) {
        // First get the point in which the paddle hit the ball
        let collidePoint = ball.y - (player.y + player.height / 2);

        // Then Convert it into a number that will be 1 to -1.
        collidePoint = collidePoint / (player.height / 2);

        // Then multiply it with 45 degree so that we can get a perfect angle between
        // 45 and -45.
        let angle = (Math.PI / 4) * collidePoint;
        let direction = ball.x + ball.radius < canvas.width / 2 ? 1 : -1;
        ball.velocity.x = direction * Math.cos(angle) * ball.speed;
        ball.velocity.y = Math.sin(angle) * ball.speed;

        // Add .5 to the ball's speed to make the game fast.
        ball.speed += 0.5;

        // Particles explosion
        if (player == user) {
            // Directing the position of explosion. In this case, user
            for (let i = 0; i < ball.radius; i++) {
                let x = player.x + player.width;
                let y = ball.y + ball.radius;
                particles.push(
                    new Particle(
                        x,
                        y,
                        `hsl(${Math.round(Math.random() * 360)}, 50%, 50%)`,
                        Math.random() * 3 + 0.5,
                        {
                            x: Math.random() * 3,
                            y: (Math.random() - 0.5) * 3,
                        }
                    )
                );
            }
        } else if (player == computer) {
            // Directing the position of explosion. In this case, computer
            for (let i = 0; i < ball.radius; i++) {
                let x = player.x - player.width;
                let y = ball.y + ball.radius;
                particles.push(
                    new Particle(
                        x,
                        y,
                        `hsl(${Math.round(Math.random() * 360)}, 50%, 50%)`,
                        Math.random() * 3 + 0.5,
                        {
                            x: -Math.random() * 3,
                            y: (Math.random() - 0.5) * 3,
                        }
                    )
                );
            }
        }
    }

    particles.forEach((particle) => {
        // If radius is less than 0, it vanishes. If not, it updates.
        if (particle.radius <= 0) {
            particles.splice(particle, 1);
        } else {
            particle.update();
        }
    });
}

// When player hits the play button,
play.addEventListener("click", () => {
    cancelAnimationFrame(gameId); // Previous game resets.
    user.score = 0; // Score resets.
    computer.score = 0; // Score resets.
    panel.classList.remove("reveal"); // Panel reveals to give a message.
    resetBall(); // Ball resets.
    clearTimeout(timeout); // The ball's timeout cancels.
    ball.speed = 7; // Ball's speed becomes normal.
    ball.velocity = {
        x: 7,
        y: 7,
    };
    if (mode.value == "") {
        // If user selects no mode, alert comes. and the function stops there.
        alert("Please Select A Mode First!");
        panel.classList.add("reveal");
        return;
    }
    // If not, the computer Speed gets the value of mode.
    compSpeed = mode.value;
    // Game starts.
    game();
});

// While resizing,
window.addEventListener("resize", () => {
    Resize();
});

function Resize() {
    // The minimum window's width should be 620. If not, alert comes.
    if (window.innerWidth <= 620) {
        alert("Please Rotate Your Device.");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    } else {
        // Or the canvas width and height resets.
        canvas.width = 600;
        canvas.height = 400;
    }
}
// Plays the Resize function once to test if the user's window is perfectly matches.
Resize();
