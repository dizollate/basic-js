const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(str, word) {
    var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";	
    alph = alph.split("");
    var empty = [];
    var strArr = [];
    var finn = [];
    var slp = [];
		var encStr = str.toUpperCase().split("");				
		var keyWord = word.replace(/\s+/g, '').toUpperCase();
    keyWord = keyWord.split("")
    for (let i = 0; i < keyWord.length; i++){
      empty.push(alph.indexOf(keyWord[i]))
    }
    for (let i = 0; i < encStr.length; i++){
      strArr.push(alph.indexOf(encStr[i]))
      if (strArr[i] === -1) strArr[i] = encStr[i]
    }
    for (let i = 0, j = 0; i < strArr.length; i++, j++){
    		if (j >= empty.length) j = j - empty.length;
        if (alph.some(elem => encStr[i] === elem)){
        
         finn.push(strArr[i]+empty[j])
        } else {
        	
        	finn.push(strArr[i])
          j--
          
        }
    		
    }
    for (let i = 0; i < finn.length; i++){
    		if (finn[i] >= alph.length) {
            finn[i] = finn[i]-alph.length;
        } 
        
        if (alph[finn[i]] === undefined){
         	slp.push(encStr[i])
          
        } else if (typeof finn[i] === 'string' && finn[i]*1>0){
        	slp.push(encStr[i])
        }
        else {
        	slp.push(alph[finn[i]])
        }
    		
    }
    return slp.join("")
  }   
  decrypt(str, word) {
    var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";	
    alph = alph.split("");
    var empty = [];
    var strArr = [];
    var finn = [];
    var slp = [];
		var encStr = str.toUpperCase().split("");				
		var keyWord = word.replace(/\s+/g, '').toUpperCase();
    keyWord = keyWord.split("")
    for (let i = 0; i < keyWord.length; i++){
      empty.push(alph.indexOf(keyWord[i]))
    }
    for (let i = 0; i < encStr.length; i++){
      strArr.push(alph.indexOf(encStr[i]))
      if (strArr[i] === -1) strArr[i] = encStr[i]
    }
    for (let i = 0, j = 0; i < strArr.length; i++, j++){
    		if (j >= empty.length) j = j - empty.length;
        if (alph.some(elem => encStr[i] === elem)){
        if (strArr[i]-empty[j]<0) {
        	strArr[i] = strArr[i]+26
          finn.push(strArr[i]-empty[j])
        } else finn.push(strArr[i]-empty[j])
        } else {  	
        	finn.push(strArr[i])
          j--        
        }
    }
    for (let i = 0; i < finn.length; i++){
    		if (finn[i] >= alph.length) {
            finn[i] = finn[i]-alph.length;
        } 
        
        if (alph[finn[i]] === undefined){
         	slp.push(encStr[i])
          
        } else if (typeof finn[i] === 'string' && finn[i]*1>0){
        	slp.push(encStr[i])
        }
        else {
        	slp.push(alph[finn[i]])
        }
    		
    }
    return slp.join("")
  }   
}

module.exports = VigenereCipheringMachine;
