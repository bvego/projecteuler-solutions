const bigint = require('big-integer');

const num = bigint(2).pow(1000);

let sum = 0;

for (let c of num.toString()) {
  sum += +c;
}

console.log(sum);
