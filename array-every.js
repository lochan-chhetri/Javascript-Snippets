var billboard = [
  {song: 'Hello', rank: 1, last: 1},
  {song: 'Sorry', rank: 2, last: 2},
  {song: 'Hotline Bling', rank: 3, last: 3}
];

// iterate through array to see if ranking has changed
var isRankUnchanged = true;

for(var i = 0; i < billboard.length; i++ ){
  if(billboard[i].rank !== billboard[i].last){
     isRankUnchanged = false;
   } 
}

// outputs: isRankUnchanged: true
console.log('isRankUnchanged: ' + isRankUnchanged);

// instead of For loop we can use Array.every to test all elements
function isRankUnchanged2(element){
  // iterates through each element until returns falsy value or end of array
  return (element.rank === element.last);
}

// outputs: isRankUnchanged2: true
console.log( 'isRankUnchanged2: ' + billboard.every(isRankUnchanged2) );