let secretNumber;
let attempts;
let replayButton;


function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guess').value);
  attempts++;

  const resultElement = document.getElementById('result');
  const countElement = document.getElementById('count');

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    resultElement.textContent = 'Please enter a valid number between 1 and 100.';
  } 
  else if (userGuess === secretNumber) {
    resultElement.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    countElement.textContent = '';
    replayButton.style.display = 'block'; // Show the replay button
  } 
  else {
    resultElement.textContent = userGuess < secretNumber ? 'The guess is low! Please try again.' : 'The guess is high! Please try again.';
    countElement.textContent = `Number of attempts: ${attempts}`;
  }
}


function initializeGame() {
  secretNumber = generateRandomNumber();
  attempts = 0;
  replayButton = document.getElementById('replayButton');
  replayButton.style.display = 'none';

  // Clear previous results
  document.getElementById('result').textContent = '';
  document.getElementById('count').textContent = '';
  document.getElementById('guess').value = '';
}

// function replayGame() {
//   initializeGame(); 
// }

document.addEventListener('DOMContentLoaded', initializeGame);