let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

let prevGuess = [];
let numguess = 1;
let playGame = true;

console.log(randomNumber);

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter valid number');
  } else if (guess < 1) {
    alert('Please enter number greater than 1');
  } else if (guess > 100) {
    alert('Please enter number less than 100');
  } else {
    prevGuess.push(guess);
    if (numguess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`Your guess is correct`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`The number is higher`);
  } else if (guess > randomNumber) {
    displayMessage(`The number is lower`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess} `;
  numguess++;
  lastResult.innerHTML = `${11 - numguess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  const button = document.createElement('button');
  button.innerHTML = 'New Game';
  button.id = 'newGame';
  startOver.appendChild(button);
  playGame = false;
  newGame();
}
function newGame() {
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener('click', function (e) {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    prevGuess = [];
    numguess = 1;
    guessSlot.innerHTML = '';
    result.innerHTML = `${11 - numguess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(button);
    playGame = true;
  });
}
