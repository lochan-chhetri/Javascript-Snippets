var globalEconomy = ["China", "Japan", "US"];

globalEconomy.sort(function(a,b){

  // if return value is negative, a moves to lower index
  
  if(a.match(/US/)){
    return -1;
  }
  
  // if return value is positive, a moves to higher index
  
  // step 2 -> compares ["Japan", "US"] 
  // -> since b equals US, move a(Japan) to higher index 
  
  // step 3 -> compares ["China","US"]
  // -> since b equals US, move a(China) to higher index

  if(b.match(/US/)){
    console.log(a + b);
    return 1;
  }
  
  // if result returns 0, sort is not performed
  
  // step 1 -> compares ["China","Japan"]
  // -> a(China) and b(Japan) not equal to US
  
  console.log(a + b);
  return 0;
  
});

// Outputs:
// ["US", "China", "Japan"]
console.log( globalEconomy );