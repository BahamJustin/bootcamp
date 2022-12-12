// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  const letters = str.split("");
  const palindrome = letters.reverse().join("");

  if (str === palindrome) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};

isPalindrome("racecar");
