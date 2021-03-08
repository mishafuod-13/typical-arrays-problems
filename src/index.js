
exports.min = function min (array) {
  if (!Array.isArray(array)||array.length==0) {
    return 0;
  }
  return array.reduce(function(prevval, current) {
    if (current<prevval){
      prevval=current;
     }
    return prevval;
   });
}

exports.max = function max (array) {
  if (!Array.isArray(array)||array.length==0) {
    return 0;
  }
  return array.reduce(function(prevval, current) {
    if (current>prevval){
      prevval=current;
     }
    return prevval;
   }); 
}

exports.avg = function avg (array) {
  if (!Array.isArray(array)||array.length==0) {
    return 0;
  }
  let sum = array.reduce(function(prevval, current) {
    return prevval + current;
    });
    return sum/2;
}
