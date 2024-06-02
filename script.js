'use strict';

//catch elements
const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const guessField = document.querySelector('.guess');
const numberField = document.querySelector('.number');
const message = document.querySelector('.message');
const scoreField = document.querySelector('.score');
const highScoreField = document.querySelector('.highscore');
const body = document.querySelector('body');

// initialize default mode
const minScore = 0;
const maxScore = 20;

let answerNumber;
let playerScore = 20;
let highScore = 0;

// initialize object datas
let answerTypes = {
  equal: 'equal',
  high: 'high',
  low: 'low',
  none: 'none',
  notValid: 'not valid',
};

let messages = {
  equal: 'Bingo, congrats! you won🥳',
  high: 'Sorry, your answer is high 👆',
  low: 'Sorry, your answer is low 👇',
  none: 'Please, insert the number 🙏',
  notValid: 'Please, insert the number between 1 and 20',
  default: 'Start guessing ...',
};

// game logics

function createNewNumber() {
  answerNumber = Math.trunc(Math.random() * 20 + 1);
}

function onCheckButton() {
  const guessValue = Number(guessField.value);
  if (guessValue === minScore || guessValue > maxScore) {
    checkAnswer(answerTypes.notValid);
  } else if (!guessValue) {
    checkAnswer(answerTypes.none);
  } else if (guessValue === answerNumber) {
    checkAnswer(answerTypes.equal);
  } else if (guessValue > answerNumber) {
    checkAnswer(answerTypes.high);
  } else if (guessValue < answerNumber) {
    checkAnswer(answerTypes.low);
  }
}

function checkAnswer(answer) {
  switch (answer) {
    case answerTypes.notValid:
      message.textContent = messages.notValid;
      break;
    case answerTypes.none:
      message.textContent = messages.none;
      break;
    case answerTypes.equal:
      onCorrectAnswer();
      break;
    case answerTypes.high:
      message.textContent = messages.high;
      reduceScore();
      break;
    case answerTypes.low:
      message.textContent = messages.low;
      reduceScore();
      break;
  }
}

function onCorrectAnswer() {
  message.textContent = messages.equal;
  numberField.textContent = answerNumber;
  if (playerScore > highScore) {
    highScore = playerScore;
  }
  highScoreField.textContent = highScore;
  createNewNumber();
  checkButton.disabled = true;
  checkButton.classList.add('disabled');
  body.style.backgroundColor = '#60b347';
}

function reduceScore() {
  if (playerScore === 1) {
    playerScore = maxScore;
    onAgain();
  } else {
    playerScore--;
  }
  scoreField.textContent = playerScore;
}

function onAgain() {
  playerScore = maxScore;
  numberField.textContent = '?';
  guessField.value = '';
  message.textContent = messages.default;
  scoreField.textContent = playerScore;
  checkButton.disabled = false;
  checkButton.classList.remove('disabled');
  body.style.backgroundColor = '#222';
  createNewNumber();
}

// initialize the game
createNewNumber();
scoreField.textContent = playerScore;
highScoreField.textContent = highScore;

checkButton.addEventListener('click', onCheckButton);
againButton.addEventListener('click', onAgain);
