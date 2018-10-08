const INPUT = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`;

class Node {
  constructor(value) {
    this.value = value;
    this.leftBellow = null;
    this.rightBellow = null;
  }
}

// map all the values to the 'Node' structure
const DATA = INPUT.split('\n')
  .map(row => row.split(' ').map(Number))
  .map(row => row.map(value => new Node(value)));

// set the adjacent nodes
DATA.forEach((row, y) =>
  row.forEach((node, x) => {
    if (DATA[y + 1]) {
      node.leftBellow = DATA[y + 1][x];
      node.rightBellow = DATA[y + 1][x + 1];
    }
    node.id = `${x} ${y} ${node.value}`;
  })
);

const root = DATA[0][0];
const memo = {};

const depthFirstMaxPath = node => {
  if (!node) {
    return 0;
  }

  if (memo[node.id]) {
    return memo[node.id];
  }

  const maxBelowLeft = node.value + depthFirstMaxPath(node.leftBellow);

  const maxBelowRight = node.value + depthFirstMaxPath(node.rightBellow);
  const maxBelow = Math.max(maxBelowLeft, maxBelowRight);
  memo[node.id] = maxBelow;

  return maxBelow;
};

console.time('solution');
console.log(depthFirstMaxPath(root));
console.timeEnd('solution');
