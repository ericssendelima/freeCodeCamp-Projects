function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

/*
function rangeOfNumbers(startNum, endNum) {
  return endNum < startNum
    ? []
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}

*/
