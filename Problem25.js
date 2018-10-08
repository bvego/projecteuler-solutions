// number too large for pure js..
const bigint = require('big-integer');

const memo = {};

const fibonacci = n => {
  if (memo[n]) {
    return memo[n];
  }

  if (n <= 1) {
    return n;
  }
  return (memo[n] = bigint(fibonacci(n.subtract(2))).plus(
    fibonacci(n.subtract(1))
  ));
};

const numberOfDigits = x => {
  let count = 0;

  while (x.divide(10).greaterOrEquals(1)) {
    x = x.divide(10);
    count++;
  }

  return count + 1;
};

const TARGET = 1000;

let i = bigint(1);

while (numberOfDigits(fibonacci(i)) < TARGET) {
  i = i.add(1);
}

console.log(i.toJSNumber());
