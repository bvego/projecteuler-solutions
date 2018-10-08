const isPalindrome = n => {
  const nstr = n.toString();
  for (let i = 0; i < nstr.length / 2; i++) {
    if (nstr[i] !== nstr[nstr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

let maxProduct = -Infinity;

for (let i = 100; i < 999; i++) {
  for (let j = i; j < 999; j++) {
    if (i * j < maxProduct) {
      break;
    }

    if (isPalindrome(i * j)) {
      maxProduct = Math.max(maxProduct, i * j);
    }
  }
}

console.log(maxProduct);
