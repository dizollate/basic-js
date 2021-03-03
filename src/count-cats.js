const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
   if (typeof matrix === 'undefined'){return 0}
	let empt = []; 
  let newArr = matrix.flat(matrix.length);
  empt = newArr.filter(el => el === "^^");
  return empt.length
};
