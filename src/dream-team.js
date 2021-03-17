const CustomError = require("../extensions/custom-error");
/*
module.exports = function createDreamTeam(members) {
    let word = members.reduce((ac, el, ind) => {
        return ac[ind] += (!el && typeof el === "object") ? "" : el[0];
    }, []);
    return word.sort().join("").toUpperCase();
};
*/

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let word = members.map((el, ind, ar) => {
      return ar[ind] = (typeof el === "string") ? el.trim()[0].toUpperCase() : "";
  });
  return word.sort().join("").toUpperCase();
};
