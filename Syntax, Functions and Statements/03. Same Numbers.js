function solve(integer) {
  let numAsString = String(integer);

  let stringLength = numAsString.length;

  let areEqual = true;
  let firstNum = numAsString[0];
  let sum = 0;

  for (let i = 0; i < stringLength; i++) {
    let currentNum = numAsString[i];

    if (firstNum !== currentNum) {
      areEqual = false;
    }
    sum += Number(currentNum);
  }
  if (areEqual) {
    console.log(true);
    console.log(sum);
  } else {
    console.log(false);
    console.log(sum);
  }
}

solve(1234);
