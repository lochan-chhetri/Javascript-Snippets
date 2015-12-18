// Sort array
function sortArray(){

  var numbers = [3,1,4,10,9];
 
  // sorts based on unicode e.g. 3 is greater than 10 in unicode
  // outputs: [1, 10, 3, 4, 9]
  numbers.sort();
  
  // sorts numbers in ascending order
  // outputs: [1, 3, 4, 9, 10]
  numbers.sort(function(a,b){
    return a-b;
  });
  
  // sorts numbers in descending order
  // outputs: [10, 9, 4, 3, 1]
  numbers.sort(function(a,b){
    return b-a;
  });
  
  return numbers;
  
}