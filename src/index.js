
exports.min = function min (array) {
  if (undefined == array || null == array || 0 == array.length){
    return 0;
  }
  let minElem = array[0];
  for(let i=0; i < array.length; i++){
    if(array[i] < minElem) {
      minElem = array[i];
    }
  }
  return minElem;
}

exports.max = function max (array) {
  if (undefined == array || null == array || 0 == array.length){
    return 0;
  }
  let maxElem = array[0];
  for(let i=0; i < array.length; i++){
    if(array[i] > maxElem) {
      maxElem = array[i];
    }
  }
  return maxElem;
}

exports.avg = function avg (array) {
  if (undefined == array || null == array || 0 == array.length){
    return 0;
  }
  let sum = 0;
  for(let i=0; i < array.length; i++){
    sum = sum + array[i]
  }
  return sum/array.length;
}
