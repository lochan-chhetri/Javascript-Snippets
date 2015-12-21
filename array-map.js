// Create new array using/transforming values from existing array

var grocery = [
  {item: 'milk', amount: 10 },
  {item: 'bread', amount: 5 },
  {item: 'eggs', amount: 14 },
];

// traditional way
var afterTax = [];

for(var i = 0; i < grocery.length; i++){
  var transform = {
    item: grocery[i].item,
    amount: grocery[i].amount,
    total: (grocery[i].amount) + (10 * grocery[i].amount) / 100
  };
  
  afterTax.push(transform);
}

// use array map . notice that for loop not needed to iterate through array elements
var afterTax2 = grocery.map(function(val){
  return {
    item: val.item,
    amount: val.amount,
    total: (val.amount) + (10 * val.amount) / 100
  };
});

// use underscore
var afterTax3 = _.map(grocery, function(val){
  return {
    item: val.item,
    amount: val.amount,
    total: (val.amount) + (10 * val.amount) / 100
  };
});

// Following arrays are transformed version of original grocery array
console.log(afterTax);
console.log(afterTax2);
console.log(afterTax3);