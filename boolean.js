// Boolean in Javascript

// There are three ways of using boolean in Javascript
// 1. primitive

var primTrue = true;
var primFalse = false;

// Outputs: true false
console.log(primTrue, primFalse);

// 2. Boolean function

var funcBoolTrue = Boolean(true);
var funcBoolFalse = Boolean(false);

// Outputs: true false
console.log(funcBoolTrue, funcBoolFalse);

// 3. Boolean function as a constructor

var constTrue = new Boolean(true);
var constFalse = new Boolean(false);

// Outputs: true true
console.log(constTrue, constFalse);

// Boolean constructor returns an object and because it is an object, the return value is true.

// In order to get the actual value, we need to use valueOf().
// valueOf() returns an internal value of the boolean object.

// Outputs: true false
console.log(constTrue.valueOf(), constFalse.valueOf());

// Use of Boolean constructor is not recommended because of Javascript type coercion

// To change different Type (e.g. number) to Boolean, use !! (notnot) as below

var num = 0;

// outputs: number
console.log(typeof num);

// first ! coerces the value into boolean and reverses it
// second ! reverses the value back to correct boolean representation
var boolNotNot = !!num; 

// outputs: false
console.log(boolNotNot);