
let numOne = getNum('Enter the first number: ');
let numTwo = getNum('Enter the second number: ');

function getNum(prompt) {
  let rlSync = require('readline-sync');
  let num = Number(rlSync.question(prompt));
  return num;
}

function multiply (factorOne, factorTwo) {
 return factorOne * factorTwo;
} 

console.log(`${numOne} * ${numTwo} = ${multiply(numOne, numTwo)}`);