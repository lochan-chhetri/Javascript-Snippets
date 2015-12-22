// constructor function
function Car(make){
  this.make = make;
  this.speed = 0;
}

// We can assign methods (accelerate, paint) to the constructor's prototype and will be available to all objects created by the constructor.
Car.prototype.accelerate = function(speed){
  this.speed = speed;
  return 'car speed is ' + this.speed + 'mph';
};

Car.prototype.paint = function(color){
  this.color = color;
  return 'car is painted ' + this.color;
};

// 'new' operator is used with a 'constructor' function to produce an object (car1)
// 'this' is set to an object that 'new' operator will return
var car1 = new Car("Toyota");
console.log(car1);
console.log( car1.accelerate(15) );
console.log( car1.paint("red") );

// new object returned by 'new' (car1) is marked as instance of 'constructor' function 'Car'
console.log(car1 instanceof Car);