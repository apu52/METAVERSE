const buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;
var highestScore = 0;

$(document).ready(function () {
  // Show popup when the page loads
  $("#popup, #overlay").removeClass("hidden");

  // Start game when the "Start" button is clicked
  $("#start-game").click(function () {
    $("#popup, #overlay").addClass("hidden");
    nextSequence();
    started = true;
  });

  $("#restart-game").click(function () {
    nextSequence();
    started = true;
    $("#restart-game").addClass("hidden");
  });
  // Start game when a key is pressed
  $(document).keypress(function () {
    if (!started) {
      $("#popup").addClass("hidden");
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  console.log(gamePattern[currentLevel]);
  console.log(userClickedPattern[currentLevel]);
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      if (level > highestScore) {
        highestScore = level;
        $(".highscore").text(highestScore);
      }
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text(
      "Game Over, Press Any Key or Restart Button to Restart"
    );

    $("#restart-game").removeClass("hidden");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
  $(".highscore").text(highestScore);
}
