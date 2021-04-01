let rlSync = require('readline-sync');

function nameWhole(nameFirst, nameLast) {
  console.log(`Hello, ${nameFirst} ${nameLast}!`);
}

nameWhole(rlSync.question("What's your first name? "), rlSync.question("What's your last name? "));