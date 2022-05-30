function solve(num1, num2) {
  function compareNums(a, b) {
    if (a >= b) {
      return b;
    } else {
      return a;
    }
  }
  let smallerNum = compareNums(num1, num2);

  for (let i = smallerNum; i > 0; i--) {
    let divisor = i;

    if (num1 % divisor === 0 && num2 % divisor === 0) {
      console.log(divisor);
      break;
    }
  }
}

solve(2154, 458);
