console.log("SENG 560 Programming Assignment 1");

/* Unit test for addNumbers()
For complete unit testing, see app.test.js 
var a = addNumbers(1, -2);
console.log(a);
*/

const addNumbers = (a, b) => {
    try {
    if (isNaN(a) || isNaN(b)) {
        return 'Please provide values and/or valid numbers';
      } else {
          return a + b;
      }
    } catch (e) {
        return "unexpected error occured";
    }
}

exports.addNumbers = addNumbers;
/* subtractNumbers() */

/* Unit test for subractNumbers()
For complete unit testing, see app.test.js 
var a = subtractNumbers(1, -2);
console.log(a);
*/

const subtractNumbers = (a, b) =>{
 try {
    if (isNaN(a) || isNaN(b)) {
        return 'Please provide values and/or valid numbers';
      } else {
          return a - b;
      }
    } catch (e) {
        return "unexpected error occured";
    }
}

exports.subtractNumbers = subtractNumbers;
/* subractNumbers() */