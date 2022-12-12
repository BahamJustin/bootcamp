// TODO: Complete the 'counter' function below.
function counter() {
  let count = 0;
  // return as an object
  return {
    increment: function () {
      return ++count;
    },
  };
}

// Displays an interactive list of the properties of the specified JavaScript object
console.dir(counter);

module.exports = counter;
