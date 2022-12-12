const multiplyInto20 = function (arr) {
  const numMap = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    let neededNumber = 20 / currentNum;

    const What = numMap[neededNumber];
    console.log(What);

    // if (numMap[neededNumber]) {
    //   return true;
    // }
    // numMap[currentNum] = true;
  }

  return false;
};
