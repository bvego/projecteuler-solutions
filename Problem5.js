const divisors = [...Array(20)].map((_, i) => i + 1);

let num = divisors[divisors.length - 1];

a: while (true) {
  for (let i = 0; i < divisors.length; i++) {
    if (num % divisors[i] !== 0) {
      num++;
      continue a;
    }
  }
  console.log(num);
  break;
}
