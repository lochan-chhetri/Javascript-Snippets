// Array.reduce reduces an array to a single value
var expense = [5,3,6,7,4,1];

// reduce() applies a function against each element of an array
var total = expense.reduce(function(prev,next){
  return prev + next;
});

// Outputs: Total Amount is 26
console.log('Total Amount is ' + total);