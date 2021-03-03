const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi (turns, speed) {
   let obj = {};
   let turn = (2**turns) - 1;
   let sec = Math.trunc((3600/speed)*turn);
   return `turns: ${turn}, seconds: ${sec}`
};
