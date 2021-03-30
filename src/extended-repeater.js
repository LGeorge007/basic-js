const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  //string by default
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  //must be converted to string
  const addition = options.addition === undefined ? "" : String(options.addition);
  str = String(str);
  let resultString = "";
  let repeatString = "";

  if (Number.isInteger(repeatTimes) && Number.isInteger(additionRepeatTimes)) {
    for (let i = 0; i < repeatTimes; i++) {
      resultString += str;
      repeatString = "";
      for (let i = 0; i < additionRepeatTimes; i++) {
        if (i == additionRepeatTimes - 1) {
          repeatString += addition;
        } else {
          repeatString += addition + additionSeparator;
        };
      };
      if (i == repeatTimes - 1) {
        resultString += repeatString;
      } else {
        resultString += repeatString + separator;
      };
    };
  }
  return resultString;
};
