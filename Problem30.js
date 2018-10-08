const POWER = 5;
const UPPER_LIMIT = 9 ** POWER * POWER;

const satisfiesTheCondition = n => {
  const nstr = n.toString();
  let sum = 0;
  for (let c of nstr) {
    sum += (+c) ** POWER;
  }
  return sum === n;
};

const numbers = [];

for (let i = 2; i < UPPER_LIMIT; i++) {
  if (satisfiesTheCondition(i)) {
    numbers.push(i);
  }
}
console.log(numbers.reduce((xs, x) => xs + x));
