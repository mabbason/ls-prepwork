let rlSync = require('readline-sync');
let nameFirst = rlSync.question("What's your first name? ");
let nameLast = rlSync.question("What's your last name? ");
console.log(`Hello, ${nameFirst} ${nameLast}!`);