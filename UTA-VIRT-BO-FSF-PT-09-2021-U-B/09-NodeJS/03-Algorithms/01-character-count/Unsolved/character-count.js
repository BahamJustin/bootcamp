// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  var charObject = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char in charObject) {
      charObject[char]++;
    } else {
      charObject[char] = 1;
    }
  }

  console.log(JSON.stringify(charObject));

  return charObject;
};

characterCount("Hello World");
