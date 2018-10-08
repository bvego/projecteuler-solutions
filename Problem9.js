const isTriplet = (a, b, c) => a * a + b * b === c * c;

for (let i = 1; i < 1000; i++) {
  for (let j = i; j < 1000; j++) {
    for (let k = j; k < 1000; k++) {
      if (isTriplet(i, j, k)) {
        if (i + j + k === 1000) {
          console.log(i * j * k);
        }
      }
    }
  }
}
