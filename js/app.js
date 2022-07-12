'use strict';

// Holds name input between button presses.
let user = '';

let startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => {

  if (!user) {
    user = prompt('What is your name?');
  }
  if (user.toLowerCase() === 'robert') {
    alert('Hello, name brother!');
  }
  else (alert(`Hello, ${user}!`));

  alert('The following trivia questions should be answered with a simple \'yes\' or \'no\'');

  let isAnswered = false;
  let points = 0;

  while (!isAnswered) {
    let questionOne = prompt('Are there 86400 seconds in a day?');
    switch (questionOne.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Correct');
      alert('That\'s correct!');
      points++;
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Incorrect');
      alert('Sorry, that is not correct.');
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  // console.log(`Points: ${points}`);
  isAnswered = false;
  while (!isAnswered) {
    let questionTwo = prompt('Does Marty McFly go back to the past in "Back to the Future"?');
    switch (questionTwo.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Correct');
      alert('That\'s correct!');
      points++;
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Incorrect');
      alert('Sorry, that is not correct.');
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  // console.log(`Points: ${points}`);
  isAnswered = false;
  while (!isAnswered) {
    let questionThree = prompt('Does Tatooine in Star Wars have three suns?');
    switch (questionThree.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Incorrect');
      alert('Sorry, that is not correct.');
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Correct');
      alert('That\'s correct!');
      points++;
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  // console.log(`Points: ${points}`);
  isAnswered = false;
  while (!isAnswered) {
    let questionFour = prompt('Did a Lord of the Rings movie win Best Picture at the Oscars?');
    switch (questionFour.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Correct');
      alert('That\'s correct!');
      points++;
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Incorrect');
      alert('Sorry, that is not correct.');
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  // console.log(`Points: ${points}`);
  isAnswered = false;
  while (!isAnswered) {
    let questionFive = prompt('Has a foreign film ever won Best Picture at the Oscars?');
    switch (questionFive.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Correct');
      alert('That\'s correct!');
      points++;
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Incorrect');
      alert('Sorry, that is not correct.');
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  alert(`Thank you for taking the quiz, ${user}!`);

  // console.log(`Points: ${points}`);

  // Update score card below button.
  let pointLabel = document.querySelector('.point-label');
  let pointAmount = document.querySelector('.point-amount');
  pointLabel.innerText = `${user}'s Score`;
  pointAmount.innerText = `${points}`;

});
