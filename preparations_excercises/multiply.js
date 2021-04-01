let rlSync = require('readline-sync');

let numOne = rlSync.question("Enter the first number: ");
let numTwo = rlSync.question("Enter the second number: ");


function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

console.log(`${numOne} * ${numTwo} = ${multiply(numOne, numTwo)}`);