
exports.min = function min (array) {
  return array.reduce(function(prevval, current) {
    if (current<prevval){
      prevval=current;
     }
    return prevval;
   });
}

exports.max = function max (array) {
  return array.reduce(function(prevval, current) {
    if (current>prevval){
      prevval=current;
     }
    return prevval;
   }); 
}

exports.avg = function avg (array) {
  let sum = array.reduce(function(prevval, current) {
    return prevval + current;
    });
    return sum/2;
}
