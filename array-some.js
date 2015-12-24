var cars = ["Toyota", "Honda", "BMW", "Acura", "Chevy", "Ferrari"];

// find if Italian car (Ferrari) is available in above array

// set default value
var isItalian = false;

for(var i = 0; i < cars.length && !isItalian; i++ ){
  if(cars[i] === "Ferrari"){
    isItalian = true;
  }
}

// Outputs: true
console.log(isItalian);

// instead of For loop, we can use Array.some
// isItalianFn is a callback function for cars.some()
function isItalianFn(element){
  return (element === 'Ferrari');
}

// Outputs: true
// Array.some will return true if callback function returns true for any of the elements
console.log( cars.some(isItalianFn) );

// second example
var numbers = [7,3,4,5,6,7];

// the callback function isEven has access to element, index, array
function isEven(element, index, arr){
  return ( arr[index]%2 === 0);
}

console.log ( 'number ' + numbers.some(isEven) );