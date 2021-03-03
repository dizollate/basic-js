const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr){
  if (arr.length > 50) return []
	let emptyArr = []
	for (let i = 0; i<arr.length; i++){
		let emptyArr = arr.filter(person => person === '--discard-prev' || person === '--double-next' || person === '--discard-next' || person === '--double-prev')
		if (emptyArr.length === 0){
			return arr
		}
	}
	if (arr.length === 0) return [];
  const len = arr.length;
  let empty = [];
  for (let i = 0; i < len; i++) {
    empty.push(arr[i]);
    if (empty[i] === '--double-next') {
      empty.push(arr[i+1]);
      empty.splice(i, 1)
    }
    if (empty[i] === '--double-prev') {
      empty.push(empty[i-1]);
      empty.splice(i, 1);
    }
    if (empty[i] === '--discard-next') {
      if (arr[i+2] === '--discard-prev') {
         arr.splice(i+2, 1);
      }
      empty.splice(i, 1);
      i++
      
    }
    if (empty[i] === '--discard-prev') {
      empty.splice(i-1, 2)
    }
  }
    

  return empty = empty.filter(num => typeof num === 'number')
};
