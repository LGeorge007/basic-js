const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (typeof (options.separator) === undefined) options.separator = "+";
  if (typeof (options.additionSeparator) === undefined) options.additionSeparator = "|";
  if (typeof (options.addition) === undefined) options.addition = "";
  if (typeof (options.repeatTimes) === undefined) options.repeatTimes = 1;
  if (typeof (options.additionRepeatTimes) === undefined) options.additionRepeatTimes = 1;

  let resultString = str;
  let repeatString = "";

  if (Number.isInteger(options.additionRepeatTimes)) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      if (i == options.additionRepeatTimes - 1) {
        repeatString += String(options.addition);
      } else {
        repeatString += String(options.addition) + options.additionSeparator;
      };
    };
  };

  if (Number.isInteger(options.repeatTimes)) {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (i == options.repeatTimes - 1) {
        resultString += repeatString;
      } else {
        resultString += repeatString + options.separator;
      };
    };
  };

  return resultString;
};






/*
repeatTimes sets the number of repetitions of the str;
separator is a string separating repetitions of the str;
addition is an additional string that will be added to each repetition of the str;
additionRepeatTimes sets the number of repetitions of the addition;
additionSeparator is a string separating repetitions of the addition.
The str and addition parameters are strings by default. In case when type of these parameters is different, they must be converted to a string.

separator and additionSeparator parameters are strings.

repeatTimes and additionRepeatTimes are integer numbers (in the absence of any of them, the corresponding string is not repeated).

The only indispensable parameter is str, any others may be not defined. separator default value is '+'. additionSeparator default value is '|'.

For example: repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

Write your code in src/extended-repeater.js.
*/
