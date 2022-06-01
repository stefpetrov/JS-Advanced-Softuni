function solve(input) {
  

 let sum = input[0].reduce((sum, el) => sum + el);

  for (let i = 0; i < input[0].length; i++) {
    let currentCol = 0;

    for (let j = 0; j < input.length; j++) {
      currentCol += input[j][i];
    }

    if (currentCol !== sum) {
      return false;
    }
  }
  return true;
}

solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
