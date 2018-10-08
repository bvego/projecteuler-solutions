const bi = require('big-integer');

const LOWER_A = 2;
const LOWER_B = 2;
const UPPER_A = 100;
const UPPER_B = 100;

const values = new Set();

for (let a = LOWER_A; a <= UPPER_A; a++) {
  for (let b = LOWER_B; b <= UPPER_B; b++) {
    values.add(
      bi(a)
        .pow(b)
        .toString()
    );
  }
}

console.log(values.size);
