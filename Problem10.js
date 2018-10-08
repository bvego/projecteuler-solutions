const UP_TO = 2e6;
const SIEVE = [...Array(UP_TO + 1)].fill(true);

for (let i = 2; i < SIEVE.length; i++) {
  for (let j = 2; i * j < SIEVE.length; j++) {
    SIEVE[i * j] = false;
  }
}

let sum = 0;

for (let i = 2; i < SIEVE.length; i++) {
  if (SIEVE[i]) {
    sum += i;
  }
}

console.log(sum);
