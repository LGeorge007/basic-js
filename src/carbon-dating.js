const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let t;
  if (typeof sampleActivity !== "string" || Number.isNaN(sampleActivity)) {
    return false;
  } else {
    if (sampleActivity > 0 && sampleActivity < 15) {
      let ratio = MODERN_ACTIVITY / parseFloat(sampleActivity);
      k = Math.LN2 / HALF_LIFE_PERIOD;
      t = Math.log(ratio) / k;
    } else {
      return false;
    };
  };
  return Math.ceil(t);
};
