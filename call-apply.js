function add(a,b){
  return a+b;
}
// Outputs 3
console.log( add(1,2) );

// Another way of calling add function - arguments are passed as series
// Outputs 3
console.log( add.call(this, 1, 2) );

// Third was of calling add function - arguments are passed as an array
// Still Outputs 3
console.log( add.apply(this, [1,2]) );

// With call, you can borrow method from one object and use on another like below
var vegetable = {
  name: "Broccoli",
  cook: function(){
    console.log('Cook the ' + this.name);
  }
};

var fruit = {
  name: "Pineapple"
};

// outputs: Cook the Broccoli
vegetable.cook();

// outputs: Cook the Pineapple
vegetable.cook.call(fruit);