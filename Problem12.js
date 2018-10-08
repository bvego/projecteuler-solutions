const numberOfDivisors = n => {
  let count = 0;
  let i = 1;
  for (i; i * i < n; i++) {
    if (n % i === 0) {
      count += 2;
    }
  }
  if (i * i === n) {
    count++;
  }

  return count;
};

let p = 1;
for (let i = 1; ; i += ++p) {
  if (numberOfDivisors(i) >= 500) {
    console.log(i, numberOfDivisors(i));
    break;
  }
}
