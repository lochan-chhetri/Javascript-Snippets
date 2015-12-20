function CustomArray(){
  
  this.length = 0;
  
  this.push = function(val){
    if(val === undefined){
       return;
    }
    
    this[this.length] = val;
    this.length = this.length + 1;
  };
  
  this.pop = function(val){
    if(val === undefined){
      return;
    }
    
    for(var i = 0; i < this.length; i++){
      if( this[i] === val ){
        
        delete this[i];
        
        // iterate through rest of the indexes
        for(var j = i; j < this.length; j++){
            this[j] = this[j+1];
            
            // last index will be undefined. ok to delete
            if(this[j] === undefined){
              delete this[j];
            }
        }
        
        // update length
        this.length = this.length -1;

      }        
    }
  };
}

var myArray = new CustomArray();

myArray.push('test1');
myArray.push('test2');
// Outputs:
// CustomArray {0: "test1", 1: "test2", length: 2}
console.log(myArray);

myArray.pop('test1');

// Outputs:
// CustomArray {0: "test2", length: 1}
console.log(myArray);