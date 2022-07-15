'use strict';

// Holds name input between button presses.
let user = '';
let points;

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

  points = 0;
  question1();
  question2();
  question3();
  question4();
  question5();
  question6(4);
  question7(6);

  alert(`Thank you for getting to know me, ${user}! Your final score is ${points}.`);

  // Update score card below button.
  let pointLabel = document.querySelector('.point-label');
  let pointAmount = document.querySelector('.point-amount');
  pointLabel.innerText = `${user}'s Score`;
  pointAmount.innerText = `${points}`;
});

function question1(){
  let isAnswered = false;
  while (!isAnswered) {
    let answerOne = prompt('Am I in the Air Force?');
    switch (answerOne.toLowerCase()) {
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
}

function question2(){
  let isAnswered = false;
  while (!isAnswered) {
    let answerTwo = prompt('Have I watched every Star Wars film/show in chronological order?');
    switch (answerTwo.toLowerCase()) {
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
}

function question3(){
  let isAnswered = false;
  while (!isAnswered) {
    let answerThree = prompt('I used to play the euphonium. Do you know what that is?');
    switch (answerThree.toLowerCase()) {
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
}

function question4(){
  let isAnswered = false;
  while (!isAnswered) {
    let answerFour = prompt('Do I have a Lord of the Rings tattoo?');
    switch (answerFour.toLowerCase()) {
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
}

function question5(){
  let isAnswered = false;
  while (!isAnswered) {
    let answerFive = prompt('Do I have any dogs?');
    switch (answerFive.toLowerCase()) {
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
}

function question6(guessesRemaining){
  let isAnswered = false;
  while (!isAnswered && guessesRemaining) {
    let answerSix = prompt('How many years old am I?');
    let answerInt = parseInt(answerSix);
    if (answerSix === null) {
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
}

function question7(guessesRemaining){
  let isAnswered = false;
  let possibilities = ['Myrtle Beach', 'Columbia', 'Baltimore', 'El Paso', 'Federal Way', 'Tacoma'];
  while (!isAnswered && guessesRemaining) {
    let answerSeven = prompt('Guess a city that I\'ve lived in (or currently live in).');
    possibilities.forEach((element, i) => {
      if (element.toLowerCase() === answerSeven.toLowerCase()) {
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
}
