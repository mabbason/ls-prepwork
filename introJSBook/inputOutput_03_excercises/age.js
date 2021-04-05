let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you? "));

for (let i = 0; i < 50; i += 10) {
  if (i === 0) {
    console.log(`You are ${age} years old.`);
  }
  else {
    console.log(`In ${i} years, you will be ${age + i} years old.`);
  }
}