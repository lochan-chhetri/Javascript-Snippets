// Determining if a string contains a substring

var europe = "Germany, France, Belgium";

function isEurope(country){
  // 1. one way is to use indexOf. It is ok to use for simple substrings
  if( europe.indexOf(country) >= 0 ){
    console.log('Method 1: ' + country + ' is in Europe.');
  } else {
    console.log('Method 1: ' + country + ' is NOT in Europe.');
  }
  
  // 2. Use RegExp
  // Limitation: could break if string has regex characters like ?.
  var countryRegExp = new RegExp(country);
  
  if(countryRegExp.test(europe)){
    console.log('Method 2: ' + country + ' is in Europe.');
  } else {
    console.log('Method 2: ' + country + ' is NOT in Europe.');
  }
  
  // 3. Use ES6 contains
  // Supported only on Firefox 19+ 
  if(europe.contains){
    if(europe.contains(country)){
      console.log('Method 3: ' + country + ' is in Europe.');
    } else {
      console.log('Method 3: ' + country + ' is NOT in Europe.');
    }
      
  }
  
}

isEurope("France");