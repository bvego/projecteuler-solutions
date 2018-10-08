const GRID_SIZE = 2 + 1;

const GRID = [...Array(GRID_SIZE)].map(e => [...Array(GRID_SIZE)].fill(1));

for (let i = 0; i < GRID.length; i++) {
  for (let j = 0; j < GRID[i].length; j++) {}
}

console.log(GRID);
