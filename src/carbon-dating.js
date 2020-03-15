const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string'){
    return false;
  }

  const numberActivity = parseFloat(sampleActivity);
  if (numberActivity !== numberActivity){
    return false;
  }

  if (numberActivity <= 0 || numberActivity > 15) {
    return false;
  }

  return Math.ceil(Math.log((MODERN_ACTIVITY / numberActivity)) / (0.693 / HALF_LIFE_PERIOD));
};
