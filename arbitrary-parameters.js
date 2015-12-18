// function that accepts arbitrary parameters
function navigate(){

  var breadcrumb = '';
  
  // iterate through arbitrary parameters and adds '->' between argument values
  for(var i =0; i < arguments.length; i++){
    breadcrumb += arguments[i] + ( i < arguments.length-1 ? ' -> ':'') ;
  }
  
  return breadcrumb;
}

// Outputs:
// North America -> United States -> California -> San Francisco -> Market Street -> 685
navigate("North America", "United States", "California", "San Francisco", "Market Street", 685);