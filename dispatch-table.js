function capital(country){
  switch(country){
    case "USA": 
      found("Washington D.C.");
      break;
    case "UK":
      found("London");
      break;
    case "Russia":
      found("Moscow");
      break;
    default:
      notfound();
      break;
  }
}

function found(capital){
  console.log(capital);
}

function notfound(){
  console.log("Sorry not found in database");
}

capital("USA");

// instead of using conditionals like switch statements
// use dispatch table

var capital = {
  USA: function(){ found("Washington D.C."); },
  UK: function(){ found("London"); },
  Russia: function(){ found("Moscow"); },
  NA: notfound
};

function findCapital(country){
  
  if ( capital[country] ){
    capital[country]();
   } else {
     capital.NA();
   }
 }

findCapital("UK");