const removeFromArray = function(array, ...arrayDel) {

        return array.filter(v => { 
              return !arrayDel.includes(v); 
          });


};

// Do not edit below this line
module.exports = removeFromArray;
