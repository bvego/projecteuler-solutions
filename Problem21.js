const properDivisorsSum = n => {
  let sum = 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (i === n / i) sum += i;
      else sum += i + n / i;
    }
  }
  return sum + 1;
};

let sum = 0;
const table = {};

for (let i = 1; i < 10000; i++) {
  const divisorsSum = properDivisorsSum(i);

  if (properDivisorsSum(divisorsSum) === i && i !== divisorsSum) {
    sum += i;
  }
}

console.log(sum);
