console.log("SENG 560 Programming Assignment 1");

/* Unit test for addNumbers()
var x = "number"
var y = 1;
var z = 2.2;
var n = -2;

var a = addNumbers(1, -2);
console.log(a);
var a = addNumbers(1, -2);
console.log(a);
*/



const addNumbers = (a, b) => {

    if (isNaN(a) || isNaN(b)) {
        return 'Please provide values and/or valid numbers';
      } else {
          return a + b;
      }
}

exports.addNumbers = addNumbers;



/* subtractNumbers() */

/* Unit test for subractNumbers()
var x = "number"
var y = 1;
var z = 2.2;
var n = -2;
var a = subtractNumbers(1, -2);
console.log(a);

*/

const subtractNumbers = (a, b) =>{

    if (isNaN(a) || isNaN(b)) {
        return 'Please provide values and/or valid numbers';
      } else {
          return a - b;
      }
}

exports.subtractNumbers = subtractNumbers;
/* subractNumbers() */