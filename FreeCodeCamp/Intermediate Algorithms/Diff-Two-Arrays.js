// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
  // if any of the arrays are empty:
  if (arr1.length == 0 || arr2.length == 0) {
    newArr = [...arr1, ...arr2];
    return newArr;
  }
  // loop through every element of arr1 and check if arr2 doesn't include it, if that's the case push that element to the new array. 
  for (var i=0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
        newArr.push(arr1[i]);
      } 
    // check for different elements in arr2 and avoid repeats
    for (var j=0; j < arr2.length; j++ ) {
        if (!arr1.includes(arr2[j]) & !newArr.includes(arr2[j])) {
        newArr.push(arr2[j])
      }
    }  
  }
  return newArr;
}

diffArray(["snuffleupagus", "cookie monster", "elmo"], [])
// returns ["snuffleupagus", "cookie monster", "elmo"]
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
// returns [4].
