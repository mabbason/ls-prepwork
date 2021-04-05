let rlSync = require('readline-sync');


function getName() {
  let nameFirst = rlSync.question("What's your first name? ");
  let nameLast = rlSync.question("What's your last name? ");
  return nameFirst + ' ' + nameLast;
}
let wholeName = getName();
console.log(`Hello, ${wholeName}!`);