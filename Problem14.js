const collatz = n => {
  if (n === 1) {
    return 1;
  } else if (n % 2 === 0) {
    return 1 + collatz(n / 2);
  } else {
    return 1 + collatz(3 * n + 1);
  }
};

let max = -Infinity;
let maxNum = -Infinity;
for (let i = 1; i < 1e6; i++) {
  if (collatz(i) > max) {
    max = collatz(i);
    maxNum = i;
  }
}

console.log(max, maxNum);
