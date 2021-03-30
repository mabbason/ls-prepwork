let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you? "));

for (let i = 10; i < 50; i += 10) {
  if (i === 10) {
    console.log(`You are ${age} years old.`);
  }
  console.log(`In ${i} years, you will be ${i + age} years old.`);
}
