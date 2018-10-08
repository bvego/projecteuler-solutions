const bigint = require('big-integer');

const factorial = n => {
  if (n.lesserOrEquals(bigint(1))) {
    return bigint(1);
  }
  return n.multiply(factorial(n.minus(1)));
};

const factorialOfHundred = factorial(bigint(100));
let sum = 0;

for (let c of factorialOfHundred.toString()) {
  sum += +c;
}

console.log(sum);
