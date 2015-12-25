// Chainable Interface / Fluent Interface
// It is a way of cascading methods. Each method returns an object that can call another method upon it
// The trick is to return this at end of each method.

function Car(){}

Car.prototype.make = function(make){
  this.make = make;
  return this;
};

Car.prototype.model = function(model){
  this.model = model;
  return this;
};

Car.prototype.color = function(color){
  this.color = color;
  return this;
};

Car.prototype.purchase = function(){
  console.log('You are now the owner of ' + this.color + ' ' + this.make + ' ' + this.model );
  return this;
};

// Outputs:
// You are now the owner of Red Toyota Camry
var mycar = new Car();
mycar.make('Toyota').model('Camry').color('Red').purchase();