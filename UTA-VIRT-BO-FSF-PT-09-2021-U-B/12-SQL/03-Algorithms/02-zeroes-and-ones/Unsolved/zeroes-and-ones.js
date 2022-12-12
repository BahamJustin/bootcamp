// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function (str) {
  var Ones = 0;
  var Zeros = 0;

  for (let i = 0; i < str.length; i++) {
    let num = str[i];

    if (num === "1") {
      Ones++;
    } else if (num === "0") {
      Zeros++;
    }
  }

  return Zeros === Ones;
};
