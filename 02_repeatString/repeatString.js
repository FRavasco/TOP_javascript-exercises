const repeatString = function(text,nTimes) {
    stringJoin = ""
    if (nTimes<0){
        return "ERROR"
    }else{
        for (i=0; i<nTimes;i++){
            stringJoin = stringJoin+text
        }
    }
    return stringJoin
};

// Do not edit below this line
module.exports = repeatString;
