// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    let factSum = num * factorial(num - 1);
    console.log(factSum);
    return factSum;
  }
};

factorial(5);
