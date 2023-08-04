const leapYears = function(year) {
    if (year/4 == Math.trunc(year/4)){
        if (year/400 == Math.trunc(year/400)){
            return true;
        }else if(year/100 == Math.trunc(year/100)){
            return false;
        }else{
            return true;
        }
    }else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
