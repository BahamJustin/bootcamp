// Write code to create a function takes a string and returns a new string with the first word of each word capitalized

var titleCase = function (str) {
  let result = [];
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("");

    word[0] = word[0].toUpperCase();

    result.push(word.join(""));
  }
  console.log(result.join(" "));
  return result.join(" ");
};

titleCase("the quick brown fox jumps over the lazy dog.");
