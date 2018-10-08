const fbs = [1, 1];

while (fbs[fbs.length - 1] + fbs[fbs.length - 2] < 4e6) {
  fbs.push(fbs[fbs.length - 1] + fbs[fbs.length - 2]);
}

let sum = 0;

for (let i = 0; i < fbs.length; i++) {
  if (fbs[i] % 2 === 0) {
    sum += fbs[i];
  }
}

console.log(sum);
