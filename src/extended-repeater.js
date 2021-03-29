const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if ( typeof(options.separator) == undefined) options.separator = "+";
  if ( typeof(options.additionSeparator) == undefined) options.additionSeparator = "|";
  if ( typeof(options.addition) == undefined) options.addition = "";
  if ( typeof(options.repeatTimes) == undefined) options.repeatTimes = 1;
  if ( typeof(options.additionRepeatTimes) == undefined) options.additionRepeatTimes = 1;
  let repeatString = options.addition;
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    repeatString += options.additionSeparator + options.addition;
  }
  str += repeatString;
  let result = str;
  for (let i = 1; i < options.repeatTimes; i++) {
      result += options.separator + str;
  }
  return result;
};
