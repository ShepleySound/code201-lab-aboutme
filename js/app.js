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

  alert('The following questions should be answered with a simple \'yes\' or \'no\'');

  let isAnswered = false;
  let points = 0;

  while (!isAnswered) {
    let questionOne = prompt('Am I in the Air Force?');
    switch (questionOne.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Incorrect');
      alert('No, that\'s not correct.');
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Correct');
      alert('That\'s correct! I\'m in the Army.');
      points++;
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  isAnswered = false;
  while (!isAnswered) {
    let questionTwo = prompt('Have I watched every Star Wars film/show in chronological order?');
    switch (questionTwo.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Correct');
      alert('Yeah... That took a while.');
      points++;
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Incorrect');
      alert('I appreciate your faith in me, but I have...');
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  isAnswered = false;
  while (!isAnswered) {
    let questionThree = prompt('I used to play the euphonium. Do you know what that is?');
    switch (questionThree.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Correct');
      alert('Good answer! You must know a lot about useless things.');
      points++;
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Incorrect');
      alert('Wrong answer... Google it and come back, please.');
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  isAnswered = false;
  while (!isAnswered) {
    let questionFour = prompt('Do I have a Lord of the Rings tattoo?');
    switch (questionFour.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Correct');
      alert('I do! It\'s the broken sword Narsil, on my right forearm.');
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

  isAnswered = false;
  while (!isAnswered) {
    let questionFive = prompt('Do I have any dogs?');
    switch (questionFive.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Incorrect');
      alert('Nope, I just have two cats. One of them hangs out on my desk sometimes.');
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Correct');
      alert('Correct! Maybe soon, though. My cats would like a new friend.');
      points++;
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  isAnswered = false;
  let guessesRemaining = 4;
  while (!isAnswered && guessesRemaining) {
    let questionSix = prompt('How many years old am I?');
    let answerInt = parseInt(questionSix);
    if (questionSix === null) {
      break;
    }
    if (answerInt === 27) {
      alert('Correct! I\'m 27 years old.');
      points++;
      isAnswered = true;
    }
    else if (answerInt > 27 && answerInt <= 100) {
      guessesRemaining--;
      alert(`Too high... Guesses remaining: ${guessesRemaining}`);
    }
    else if (answerInt < 27 && answerInt >= 1) {
      guessesRemaining--;
      alert(`Too low... Guesses remaining: ${guessesRemaining}`);
    }
    else {
      alert('Please input a valid number between 1 and 100');
    }
    if (!guessesRemaining) {
      alert('The correct answer is 27.');
    }
  }

  isAnswered = false;
  guessesRemaining = 6;
  let possibilities = ['Myrtle Beach', 'Columbia', 'Baltimore', 'El Paso', 'Federal Way', 'Tacoma'];
  while (!isAnswered && guessesRemaining) {
    let questionSeven = prompt('Guess a city that I\'ve lived in (or currently live in).');
    possibilities.forEach((element, i) => {
      if (element.toLowerCase() === questionSeven.toLowerCase()) {
        points++;
        possibilities.splice(i, 1);
        let citiesString = '';
        for (let i = 0; i < possibilities.length; i++) {
          if (i === possibilities.length - 1) {
            citiesString += `${possibilities[i]}.`;
          }
          else {
            citiesString += `${possibilities[i]}, `;
          }

          if (i === possibilities.length - 2) {
            citiesString += 'and ';
          }
        }
        alert(`Correct! I've also lived in ${citiesString}`);
        isAnswered = true;
      }
    });
    if (!isAnswered) {
      guessesRemaining--;
      if (guessesRemaining) {
        alert(`Nope... Haven't lived there. Guesses remaining: ${guessesRemaining}`);
      } else {
        let citiesString = '';
        for (let i = 0; i < possibilities.length; i++) {
          if (i === possibilities.length - 1) {
            citiesString += `${possibilities[i]}.`;
          }
          else {
            citiesString += `${possibilities[i]}, `;
          }
          if (i === possibilities.length - 2) {
            citiesString += 'and ';
          }
        }
        alert(`Sorry, no more guesses. I've lived in ${citiesString}`);
      }
    }
  }

  alert(`Thank you for getting to know me, ${user}! Your final score is ${points}.`);

  // Update score card below button.
  let pointLabel = document.querySelector('.point-label');
  let pointAmount = document.querySelector('.point-amount');
  pointLabel.innerText = `${user}'s Score`;
  pointAmount.innerText = `${points}`;
});
