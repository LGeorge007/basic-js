const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  };
  if (arr.length === 0) {
    return [];
  };
  let elementsForDelete= ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];
  let resArr = arr.slice();
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--discard-next" && (i < arr.length - 1)) {
        resArr.splice(i+1, 1);
      } else if (arr[i] === "--double-next" && (i < arr.length - 1)) {
        resArr.splice((i+2), 0, resArr[i+1]);

      } else if (arr[i] === "--discard-prev" && i !== 0) {
        resArr.splice((i-1), 1);
      } else if (arr[i] === "--double-prev" && i !== 0) {
        resArr.splice((i-2), 0, resArr[i-1]);

      };
     }
  return resArr.filter(el => {
      return !elementsForDelete.includes(el);
  });
};
