const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let temp = 1;
    arr.forEach(el => {
      if(Array.isArray(el)) {
        let depth = this.calculateDepth(el) + 1;
        if (depth > temp) temp = depth;
      }
    });
    return temp;
  }
};
