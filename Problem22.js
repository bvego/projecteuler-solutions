const fs = require('fs');

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));

const input = fs.readFileSync('names.txt', 'utf8');
const names = input.split(',').map(name => name.replace(/"/g, ''));

const calculateNameScore = name => {
  let sum = 0;
  for (let c of name) {
    sum += alphabet.indexOf(c) + 1;
  }
  return sum;
};

console.log(
  names.map(calculateNameScore).reduce((xs, x, i) => xs + x * (i + 1))
);
