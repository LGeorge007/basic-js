const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],
  getLength() {
    chainMaker.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      chainMaker.chain.push('( )');
    } else {
      chainMaker.chain.push(`( ${value} )`);
    }
    return chainMaker;
  },
  removeLink(position) {
    if (Number.isNaN(position) || !Number.isInteger(position) || !(position > 0 && position<this.chain.length)){
      chainMaker.chain = [];
      throw new Error();
    } else {
      chainMaker.chain.splice(position-1, 1);
    };
    return chainMaker;
  },
  reverseChain() {
    chainMaker.chain.reverse();
    return chainMaker;
  },
  finishChain() {
      let finishChain = chainMaker.chain.join("~~");
      chainMaker.chain = [];
      return finishChain;
  }
};

module.exports = chainMaker;
