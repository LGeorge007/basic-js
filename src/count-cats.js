const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = JSON.stringify(matrix).match(/['"]\^{2}['"]/g);
  return (!res && typeof(res) === "object") ? 0 : res.length;
};
