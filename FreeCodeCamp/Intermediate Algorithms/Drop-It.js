/* 
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
// filter array for when func returns true
  var newArr= arr.filter(func);
// Use only the 1st element to slice the arr. if index = -1 the condition wasn't met, so return empty array
  if (arr.indexOf(newArr[0]) < 0) {
    return [];
  } else {
    return arr.slice(arr.indexOf(newArr[0]));
  }
}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})

// returns [3, 9, 2]
