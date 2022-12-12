// TODO: Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function (strA, strB) {
  // find length of both strings - check if equal
  let LengthA = strA.length;
  let LengthB = strB.length;
  if (LengthA !== LengthB) {
    console.log("Invalid");
    return false;
  }
  // sort both strings by alphabet order
  let objectA = strA.split("").sort().join();
  let objectB = strB.split("").sort().join();
  console.log(objectA, objectB);
  //return true or false
  if (objectA === objectB) {
    return true;
  } else {
    return false;
  }
};
