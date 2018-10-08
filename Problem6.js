const N = 100;

let sumOfSquares = 0;

for (let i = 1; i <= N; i++) {
  sumOfSquares += i * i;
}

const squareSum = ((N * (N + 1)) / 2) ** 2;
console.log(squareSum - sumOfSquares);
