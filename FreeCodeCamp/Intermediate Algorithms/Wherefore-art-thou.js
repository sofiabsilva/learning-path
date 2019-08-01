function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  //  for each object inside the array, if source is part of the object then return that object (arr.push object)
  for (var i=0; i < collection.length; i++) {
   var every = Object.keys(source).every(function(k) {
     return collection[i][k] == source[k];
   }) 
   if (every) {
      arr.push(collection[i]);
   }     
  }
  // Only change code above this line
 return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })

// returns [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
