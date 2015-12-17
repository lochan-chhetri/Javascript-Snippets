// Multiple parameters

// Approach 1: Pass all parameters individually in the function
function Car1(make, model, year){
  
  // assign default values
  if(make === undefined){ make = "not available";}
  if(model === undefined){ model = "not available";}
  if(year === undefined){ year = 0;}
  
  this.make = make;
  this.model = model;
  this.year = year;
}

var approach1 = new Car1("Toyota");
// Outputs: Car {make: "Toyota", model: "not available", year: 0}
console.log(approach1);


// Approach 2: If multiple parameters, pass them as an object
function Car2(carObj){
  
  // assign default values
  var defaults = {
    make: "not available",
    model: "not available",
    year: 0
  };
  
  var finalObj = defaults;
  
  // iterate through each property of carObj
  for(var key in carObj){
    if(carObj.hasOwnProperty(key)){
      if(carObj[key] !== undefined){
        // if current property is available, assign to final object
        finalObj[key] = carObj[key];
      }
    }
  }
  
  this.make = finalObj.make;
  this.model = finalObj.model;
  this.year = finalObj.year;
}

var approach2 = new Car2({make: "Toyota"});
// Outputs: Car2 {make: "Toyota", model: "not available", year: 0}
console.log(approach2);


// Approach 3: Use underscore extend method to further optimize Approach 2
function Car3(carObj){
  
  // assign default values
  var defaults = {
    make: "not available",
    model: "not available",
    year: 0
  };
  
  // extend method copies all properties from source object to the destination object
  var finalObj = _.extend(defaults, carObj);
  
  this.make = finalObj.make;
  this.model = finalObj.model;
  this.year = finalObj.year;
  
}

var approach3 = new Car3({make: "Toyota"});
// Outputs: Car3 {make: "Toyota", model: "not available", year: 0}
console.log(approach3);