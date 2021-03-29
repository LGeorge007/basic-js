const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let word = members.map((el, ind, ar) => {
      return ar[ind] = (typeof el === "string") ? el.trim()[0].toUpperCase() : "";
  });
  return word.sort().join("").toUpperCase();
};
