/*
function factorialOfNumber(numInput) {
  let factorial = 1;
  for (let i = 1; i <= numInput; i += 1) {
    factorial = factorial * i;
  }
  return factorial;
}
*/

function factorial (numInput) {
  if (numInput === 1) return 1;
  
  let f ;
  f = numInput * factorial(numInput - 1);
  return f;
}

console.log(factorial(5))