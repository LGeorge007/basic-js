const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //Duck description
  if (date == null) {
    return "Unable to determine the time of year!";
  }
  let checkDateType = Object.prototype.toString.bind(date);
  if (checkDateType() === "[object Date]") {
    let month = date.getMonth() + 1;
    if (month >= 3 && month <= 5) {
      return "spring";
    } else if (month >= 6 && month <= 8) {
      return "summer";
    } else if (month >= 9 && month <= 11) {
      return "autumn";
    } else {
      return "winter";
    };
  } else {
    throw new Error();
  }
};
