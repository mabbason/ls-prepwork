function catAge(humanAge) {
 let catAge;
 if (humanAge === 0) {
  catAge = 0;   
 } else if (humanAge === 1) {
  catAge = 15;
 }  else if (humanAge === 2) {
  catAge = 24;
 }  else {
   catAge = (humanAge - 2) * 4 + 24;
 }
return catAge;
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32