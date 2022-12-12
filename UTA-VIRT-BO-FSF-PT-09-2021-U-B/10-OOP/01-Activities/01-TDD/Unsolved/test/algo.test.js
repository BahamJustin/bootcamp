const { TestScheduler } = require("@jest/core");
const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    test("reverse a given string", () => {
      const algo = new Algo();
      const str1 = "Hello World!";
      const reverseStr1 = "!dlroW olleH";
      const reversed = algo.reverse(str1);

      expect(reverseStr1).toEqual(reversed);
    });
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
  });
});
