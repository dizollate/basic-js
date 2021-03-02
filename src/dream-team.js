const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
let empt = [];
let ep = [];
let emp = [];
if (!members) return false;
if (members.length == 0) return false;


	for (let i = 0; i < members.length; i++){
  	if (typeof members[i] === 'string') {
    		empt.push(members[i])
      }
  }
  
  for (let i = 0; i < empt.length; i++){
  
    empt[i] = empt[i].replace(/[0-9\s+, _, .]/g, '')
  }
  
 for (let i = 0; i < empt.length; i++){
  	ep.push(empt[i].slice(0,1))
  }
  ep = ep.join("").toUpperCase();
 for (let i = 0; i < ep.length; i++){
 		emp.push(ep[i])
 }
  emp = emp.sort().join("");
  return emp
};
