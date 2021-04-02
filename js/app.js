'use strict';

alert('Welcome to my website please be patience and answer the qustion with yes or no ');

let Q1 = prompt('what is your name');


let score = 0;

function firstQuestion() {
  let Q2 = prompt('is this the first time for you here?');

  if (Q2.toLowerCase() === 'yes' || Q2.toLowerCase() === 'y') {


    alert('i hope you will enjoy here');
    score = score + 1;
  }
  else if (Q2.toLowerCase() === 'no' || Q2.toLowerCase() === 'n') {

    alert('ths is great news welcome again');
  }
  else {

    alert('please' + Q1 + 'you have to answer with yes/no or y/n be carefull nex time');
  }
}
firstQuestion();

function secondQuestion() {

  let Q3 = prompt('have we met before in person?');
  if (Q3.toLowerCase() === 'yes' || Q3.toLowerCase() === 'y') {

    alert('we have to meet again');
    score++;
  }
  else if (Q3.toLowerCase() === 'no' || Q3.toLowerCase() === 'n') {

    alert('ths is great news welcome again hope we will meet soon');
  }
  else {

    alert('please' + Q1 + 'you have to answer with yes/no or y/n be carefull nex time');
  }
}
secondQuestion();

function thirdQuestion() {

  let Q4 = prompt('do you think its good idea to make this webpage for me?');
  if (Q4.toLowerCase() === 'yes' || Q4.toLowerCase() === 'y') {

    alert('so you have to give me your opinion to improve this site');
    score++;
  }
  else if (Q4.toLowerCase() === 'no' || Q4.toLowerCase() === 'n') {

    alert('it will be great if you have another ideas insted of this');

  }
  else {

    alert('please' + Q1 + 'you have to answer with yes/no or y/n be carefull nex time');
  }
}
thirdQuestion();

function fourthQuestion() {

  let Q5 = prompt('do you have mathematical background?');
  if (Q5.toLowerCase() === 'yes' || Q5.toLowerCase() === 'y') {

    alert('great!!!.you will be active member here');
    score = score + 1;
  }
  else if (Q5.toLowerCase() === 'no' || Q5.toLowerCase() === 'n') {

    alert('No worries here you can learn whatever you want to learn');
  }
  else {

    alert('please' + Q1 + 'you have to answer with yes/no or y/n be carefull nex time');
  }
}
fourthQuestion();

function fifthQuestion() {

  let Q6 = prompt('do you have money?');
  if (Q6.toLowerCase() === 'yes' || Q6.toLowerCase() === 'y') {

    alert('here you can earn more than your expectaion');
  }

  else if (Q6.toLowerCase() === 'no' || Q6.toLowerCase() === 'n') {

    alert('join us and this will be the last time you said NO');
    score++;

  }
  else {

    alert('you had to answer with Yes/No or y/n anyway you are welcome here');
  }
}
fifthQuestion();

function sixthQuestion() {

  let Q7 = prompt('guess number between 1 and 10');

  if (Q7 === '5') {
    alert('amazing you guess it from the first time');
    score++;
  }

  else {
    let i = 'count';
    for (i = 1; i < 4; i++) {
      Q7 = prompt(' wrong answer you have up to 3 attempt');
      if (Q7 > 5) {
        alert('oops!! its too high');
      }
      else if (Q7 < 5) {
        alert('oops!! its too low');
      }
      else {
        alert('amazing you guess it now');
        break;
      }
      if (i === 3) {
        alert(' you rach the 4th attempt dont be sad you can tray later\n the correct answer is 5');
      }
    }
  }
}
sixthQuestion();

function seventhQuestion() {

  let food = ['mansaf', 'pizza', 'burger', 'chiken'];

  let Q8 = prompt('can you guess which food is the most beloved to my heart from these :' + '\n' + '[mansaf, hotdog, pizza, burger, BQ, chiken, potato, falafel, maklobah]');
  Q8 = Q8.toLowerCase();
  if (Q8 === 'mansaf' || Q8 === 'pizza' || Q8 === 'burger' || Q8 === 'chiken') {
    alert('amazing you guess it from the first time');
    score++;
  }
  else {
    let i = 'count';
    for (i = 1; i < 6; i++) {
      Q8 = prompt(' wrong answer you have up to 5 attempt');
      if (Q8 !== 'mansaf' || Q8 !== 'pizza' || Q8 !== 'burger' || Q8 !== 'chiken') {
        alert('try again');
      }
      else {
        alert('amazing you guess it now');
        break;
      }
      if (i === 5) {
        alert(' you rach the 6th attempt dont be sad you can tray later\n the correct answer is mansaf or pizza or burger or chiken');
      }
    }
  }
}
seventhQuestion();
alert('Finaly\n' + Q1 + '\n' + 'you are welcome here its your turn to discover the website\n' + 'your score is ' + score + '  out of 7');

