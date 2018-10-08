let target = 600851475143;

const isPrime = n => {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = ~~Math.sqrt(target); i >= 2; i--) {
  if (target % i === 0 && isPrime(i)) {
    console.log(i);
    return;
  }
}
