const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let empt = [];
    let empt2 = [];
    if (str === null) str = "null"
		let time = options.repeatTimes;
     if (typeof time == "undefined") {
    	time = 1
    }
    let sep = options.separator;
    if (typeof sep == "undefined") {
    	sep = "+"
    }
    let add = options.addition;
    if (add === null) add = "null"
    let addTime = options.additionRepeatTimes;
    if (typeof addTime == "undefined") {
    	addTime = 1
    }
    let addSep = options.additionSeparator;
    if (typeof addSep == "undefined") {
    	addSep = "|"
    }
    for (let i = 0; i < addTime; i++){
    	empt2.push(add, addSep);
    }
     empt2.pop();
     let plus = empt2.join("")
    for (let i = 0; i < time; i++ ){
    	empt.push(str, plus, sep)
      
    }
    empt.pop()
    let final = empt.join("");
	return final
};
  