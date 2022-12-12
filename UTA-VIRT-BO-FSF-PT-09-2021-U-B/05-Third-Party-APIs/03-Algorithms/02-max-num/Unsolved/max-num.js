// Write code to return the largest number in the given array

var maxNum = function (arr) {
  var max = arr[0];
  console.log(max);

  for (let i = 0; i < arr.length; i++) {
    var currentNum = arr[i];

    if (currentNum > max) {
      max = currentNum;
    }
  }

  console.log(max);
  return max;
};
