const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample (sampleActivity) {
   if (typeof sampleActivity !== 'string') return false
   let num = Number(sampleActivity);
   if (isNaN(num)) return false
   if (sampleActivity.length == 0) return false
   if (num <= 0 || num >= 15) return false
  return Math.ceil((Math.log(MODERN_ACTIVITY/num))/(0.693/HALF_LIFE_PERIOD))
};
