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

  let fiveQuestions = [
    ['Am I in the Air Force?', false, 'That\'s correct! I\'m in the Army.', 'No, that\'s not correct.'],
    ['Have I watched every Star Wars film/show in chronological order?', true, 'Yeah... That took a while.', 'I appreciate your faith in me, but I have...'],
    ['I used to play the euphonium. Do you know what that is?', true, 'Good answer! You must know a lot about useless things.', 'Wrong answer... Google it and come back, please.'],
    ['Do I have a Lord of the Rings tattoo?', true, 'I do! It\'s the broken sword Narsil, on my right forearm.', 'Sorry, that is not correct.'],
    ['Do I have any dogs?', false, 'Correct! Maybe soon, though. My cats would like a new friend.', 'Nope, I just have two cats. One of them hangs out on my desk sometimes.']
  ];

  points = 0;

  trueOrFalseQuestions(fiveQuestions);
  question6(4);
  question7(6);

  alert(`Thank you for getting to know me, ${user}! Your final score is ${points}.`);

  // Update score card below button.
  let pointLabel = document.querySelector('.point-label');
  let pointAmount = document.querySelector('.point-amount');
  pointLabel.innerText = `${user}'s Score`;
  pointAmount.innerText = `${points}`;
});

function trueOrFalseQuestions(questionsDataArray){
  let answerBool;
  questionsDataArray.forEach(questionData => {
    let isAnswered = false;
    while (!isAnswered) {
      answerBool;
      let answer = prompt(questionData[0]);
      switch (answer.toLowerCase()) {
      case 'y':
      case 'yes':
      case 'true':
        isAnswered = true;
        answerBool = true;
        break;
      case 'n':
      case 'no':
      case 'false':
        isAnswered = true;
        answerBool = false;
        break;
      default:
        alert('Please enter either y/yes/true or n/no/false');
        break;
      }
    }
    if (answerBool === questionData[1]) {
      alert(questionData[2]);
      points++;
    } else {
      alert(questionData[3]);
      points++;
    }
  });
}

function question6(guessesRemaining){
  let isAnswered = false;
  while (!isAnswered && guessesRemaining) {
    let answerSix = prompt('How many years old am I? (Enter a number)');
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
    let answerSeven = prompt('Guess a city that I\'ve lived in (or currently live in). (Enter a city name)');
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
