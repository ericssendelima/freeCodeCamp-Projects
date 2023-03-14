function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}// rangeOfNumbers(1, 5) => [1, 2, 3, 4, 5]

/*
function rangeOfNumbers(startNum, endNum) {
  return endNum < startNum
    ? []
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}

*/
