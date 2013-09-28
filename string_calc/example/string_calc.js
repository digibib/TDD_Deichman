/*
 * String Calculator
 */

var StringCalc = function() {
}


StringCalc.prototype.add = function (string) {
    var array = string.split(/[,|\n]/);
    var sum = 0;
    array.forEach(function(item) {
      if (item > 0 && item < 1001) {
        sum += parseInt(item);
      }
    });
    return sum;
  }


module.exports = StringCalc;
