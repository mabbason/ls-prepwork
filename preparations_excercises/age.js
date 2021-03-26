let age = 20;

for (let i = 10; i < 50; i += 10) {
  if (i === 10) {
    console.log(`You are ${age} years old.`);
  }
  console.log(`In ${i} years, you will be ${i + age} years old.`);
}
