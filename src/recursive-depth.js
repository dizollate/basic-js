const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   calculateDepth(arr) {
   	const depthCalc = new DepthCalculator();
  	 let int = 1 + (arr instanceof Array ? arr.reduce(function(max, item) {
    return Math.max(max, depthCalc.calculateDepth(item));
  }, 0) : -1);
  	 return int
  }
};