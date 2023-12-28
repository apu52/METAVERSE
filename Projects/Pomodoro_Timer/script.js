let timerInterval;
let breakInterval;
let timer = 1500; // 25 minutes in seconds
let breakTime = 300; // 5 minutes in seconds

function startTimer() {
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
}

function updateTimer() {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timer === 0) {
        clearInterval(timerInterval);
        showBreakPopup();
    } else {
        timer--;
    }
}

function showBreakPopup() {
    document.getElementById('overlay').style.display = 'flex';
    breakInterval = setInterval(updateBreakTimer, 1000);
}

function updateBreakTimer() {
    let minutes = Math.floor(breakTime / 60);
    let seconds = breakTime % 60;
    document.getElementById('breakTimer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (breakTime === 0) {
        clearInterval(breakInterval);
        resetTimer();
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('startBtn').disabled = false;
    } else {
        breakTime--;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    clearInterval(breakInterval);
    timer = 1500;
    breakTime = 300;
    document.getElementById('timer').innerText = '25:00';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
}

function resumeTimer() {
    clearInterval(breakInterval);
    resetTimer();
    document.getElementById('overlay').style.display = 'none';
    startTimer();
}