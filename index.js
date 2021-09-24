console.log("SENG 560 Programming Assignment 1");

/* Unit testings
For complete unit testing, /test/see app.test.js 
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

const multiplyNumbers = (a, b) =>{
    try {
       if (isNaN(a) || isNaN(b)) {
           return 'Please provide values and/or valid numbers';
         } else {
             return a * b;
         }
       } catch (e) {
           return "unexpected error occured";
       }
   }
   
   exports.multiplyNumbers = multiplyNumbers;
   /* multiplyNumbers() */

   const divideNumbers = (a, b) =>{
    try {
       if (isNaN(a) || isNaN(b)) {
           return 'Please provide values and/or valid numbers';
         } else {
             return a / b;
         }
       } catch (e) {
           return "unexpected error occured";
       }
   }
   
   exports.divideNumbers = divideNumbers;
   /* divideNumbers() */

   const squareRoot = (a) =>{
    try {
       if (isNaN(a)) {
           return 'Please provide values and/or valid numbers';
         } else {
             return Math.sqrt(a);
         }
       } catch (e) {
           return "unexpected error occured";
       }
   }
   
   exports.squareRoot = squareRoot;
   /* squareRoot() */

const exponentNumber = (a, b) =>{
    try {
       if (isNaN(a) || isNaN(b)) {
           return 'Please provide values and/or valid numbers';
         } else {
             return Math.pow(a, b);
         }
       } catch (e) {
           return "unexpected error occured";
       }
   }
   
   exports.exponentNumber  = exponentNumber ;
   /* exponentNumber () */

   const numberConvert = (a, b, c) => {
   try {
       if(c == 10){
        return parseInt(a, b);
       }
       else if(typeof a === 'string'){
       a = parseInt(a, b);
       } 
      var x =  a.toString(c);
      return x.toUpperCase();
       
   } catch (e) {
    return "unexpected error occured";
   }

   }

   exports.numberConvert = numberConvert;