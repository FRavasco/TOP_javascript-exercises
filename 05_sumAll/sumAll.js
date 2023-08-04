const sumAll = function(first, last) {
    result = 0
    function isNumber(value){
        return typeof value === 'number' && isFinite(value) && value >= 0;
      }
    if (isNumber(first) && isNumber(last)){
        for (i=Math.min(first,last); i<=Math.max(first,last); i++){
            result = result+i;
        }
        return result;
    }else{
        return "ERROR"
    }
    
    
};

// Do not edit below this line
module.exports = sumAll;
