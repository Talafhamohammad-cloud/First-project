'use strict';

alert('Welcome to my website please be patience and answer the qustion with yes or no ');
let Q1 = prompt('what is your name');
let Q2 = prompt('is this the first time for you here?');
if (Q2.toLowerCase() === 'yes') {
  //console.log('i hope you will enjoy here');
  alert('i hope you will enjoy here');
}
else if (Q2.toUpperCase() === 'no') {

  //console.log('ths is great news welcome again');
  alert('ths is great news welcome again');

}
else {
  //console.log('please' + Q1 + 'you have to answer with yes or no be carful nex time');
  alert('please' + Q1 + 'you have to answer with yes or no be carefull nex time');
}
let Q3 = prompt('have we met before in person?');
if (Q3.toLowerCase() === 'yes') {
  //console.log('we have to meet again');
  alert('we have to meet again');
}
else if (Q3.toUpperCase() === 'no') {
  //console.log('ths is great news welcome agai hope we will meet soon');
  alert('ths is great news welcome again hope we will meet soon');

}
else {
  //console.log('please' + Q1 + 'you have to answer with yes or no be careful nex time');
  alert('please' + Q1 + 'you have to answer with yes or no be carefull nex time');
}
let Q4 = prompt('do you think its good idea to make this webpage for me?');
if (Q4.toLowerCase() === 'yes') {
  //console.log('so you have to give me your opinion to improve this site');
  alert('so you have to give me your opinion to improve this site');
}
else if (Q4.toUpperCase() === 'no') {
  //console.log('it will be great if you have another ideas insted of this');
  alert('it will be great if you have another ideas insted of this');

}
else {
  //console.log('please' + Q1 + 'you have to answer with yes or no be carful nex time');
  alert('please' + Q1 + 'you have to answer with yes or no be carefull nex time');
}
let Q5 = prompt('do you have mathematical background?');
if (Q5.toLowerCase() === 'yes') {
  //console.log('great!!!.you will be active member here');
  alert('great!!!.you will be active member here');
}
else if (Q5.toUpperCase() === 'no') {
  //console.log('No worries here you can learn whatever you want to learn');
  alert('No worries here you can learn whatever you want to learn');

}
else {
  //console.log('please' + Q1 + 'you have to answer with yes or no be carful nex time');
  alert('please' + Q1 + 'you have to answer with yes or no be carefull nex time');
}
let Q6 = prompt('do you have money?');
if (Q6.toLowerCase() === 'yes') {
  //console.log('here you can earn more than your expectaion');
  alert('here you can earn more than your expectaion');

}
else if (Q6.toUpperCase() === 'no') {
  //console.log('join us and this will be the last time you said NO');
  alert('join us and this will be the last time you said NO');

}
else {
  //console.log('please' + Q1 + 'you have to answer with yes or no be carful nex time');
  alert('you had to answer with Yes Or No anyway you are welcome here');
}
alert('Finaly\n'+Q1+'\n'+ 'you are welcome here its your turn to discover the website');


