'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number! 😍';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let gameWon = false;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please type a number in the field! ❗';
    //when guess is out of range
  } else if (guess > 20 || guess <= 0) {
    document.querySelector('.message').textContent =
      'Please choose a number between 0 and 20 💥';
    //when guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'You found the Secret Number! 😎';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Your guess is too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You ran out of guesses, Game Over! 😨';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Your guess is too low';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess > 20 || guess <= 0) {
    document.querySelector('.message').textContent =
      'Please choose a number between 0 and 20 💥';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent =
    'Game has been reset, start guessing ...';
});

//implementing high score
document;
