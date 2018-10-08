const TARGET = 10001;

const isPrime = n => {
  if (n === 1 || n === 2) {
    return true;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

let count = 0;
let i = 2;
let num = 0;
while (count !== TARGET) {
  if (isPrime(i)) {
    num = i;
    count++;
  }
  i++;
}

console.log(num);
