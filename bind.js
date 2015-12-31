this.number = 10;

var module = {
  number: 20,
  getNumber: function(){ return this.number; }
};

// outputs: 20 - 'this' points to module object
console.log( module.getNumber() );

var retrieveNum = module.getNumber;

// outputs: 10 - 'this' is now global
console.log( retrieveNum() );

// to avoid this and retain value of 'this' that of module object, use bind()
var boundNum = retrieveNum.bind(module);

// outputs: 20
console.log( boundNum() );


// we can use bind to permanently fix number of arguments we pass to the function
function greetings(salutation, name){
  console.log('Hello ' + salutation + ' ' + name);
}

// passing null since function doesn't depend on value of 'this'
var male = greetings.bind(null, "Mr.");
var female = greetings.bind(null, "Ms.");

// Outputs: Hello Mr. John
male("John");

// Outputs: Hello Ms. Jane
female("Jane");