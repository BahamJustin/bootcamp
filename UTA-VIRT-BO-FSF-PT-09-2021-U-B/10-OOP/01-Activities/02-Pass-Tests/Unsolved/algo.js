function Algo() {}

Algo.prototype.reverse = function (str) {
  // splits string by character into an array, reverses array, joins array, and returns
  return str.split("").reverse().join("");
};

Algo.prototype.isPalindrome = function (str) {
  // reverses Algo object 'this'
  return str === this.reverse(str);
};

Algo.prototype.capitalize = function (str) {
  // ???
  const arr = str.split(" ");
  const cap = arr.map((word) => {
    const uppercase = word.substring(0, 1).toUpperCase();
    const restOfLetters = word.substring(1);
    return uppercase + restOfLetters;
  });

  return cap.join(" ");
};

module.exports = Algo;
