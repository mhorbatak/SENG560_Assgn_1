# SENG 560 Programming Assignment 1 - Mike Horbatak

## Introduction
This is a NodeJS library that provides methods to compute basic arithmetic. These functions are as followed: 

- Addition
- Subtraction
- Multiplication
- Division
- Square Root
- Exponent
- Conversion between the various types (octal, hexadecimal, integer, binary).

## How to use this library

To install/add this library to your NodeJS application, install the library using the following command.
``` npm
npm install seng560_assgn_1
```

Next, within your application, initialize the library with the following code.

``` javascript
const math = require('seng560_assgn_1');
```
Once initialized, the following functions are available:

### Addition

``` javascript
var a = math.addNumbers(1, 3);
// this will compute: 1 + 3 = 4
console.log("The answer is: " + a);
```

### Subraction

``` javascript
var a = math.subractNumbers(4, 2);
// this will compute 4 - 2 = 2
console.log("The answer is: " + a);
```

### Multiplication

``` javascript
var a = math.multiplyNumbers(10, 6);
// this will compute 10 * 6 = 60
console.log("The answer is: " + a);
```

### Division

``` javascript
var a = math.divideNumbers(4, 2);
// this will compute 4 / 2 = 2
console.log("The answer is: " + a);
```

### Square Root

``` javascript
var a = math.squareRoot(9);
// this will compute the square root of 9 = 3
console.log("The answer is: " + a);
```

### Exponent

``` javascript
var a = math.exponentNumber(4,3);
// this will compute 4^3 = 64
console.log("The answer is: " + a);
```

### Number Conversion

``` javascript
var a = math.numberConvert(1100100, 2, 10);
// this will covert 1100100 (binary (base:2)) to 100(int (base:10))
/*
math.numberConvert(a,b,c);
a = the number you want to convert - will accept string and int values
b = the base of the number (a) being converted - e.g. 2(binary), 8(octal), 10(int), 16(hex)
c = the base the number/string will be converted to - e.g. 2(binary), 8(octal), 10(int), 16(hex)
*/
console.log("The answer is: " + a);
```

## Unit Testing
Mocha and Chai was used to unit test this library. Unit testing scripts can be found in the test directory. 

## Reuse Measures
This library is designed to be easily deployed and reused in multiple projects through the use of npm. By using the npm command above, this project will be imported and ready for use in any project that is using NodeJS.