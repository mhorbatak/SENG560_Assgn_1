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