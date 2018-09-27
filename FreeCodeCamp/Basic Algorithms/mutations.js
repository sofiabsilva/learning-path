
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// Using the some() method to check if val1 is present in at least once on the arr values. 
function isSame(arr, val1) {
  return arr.some(arrVal => val1 === arrVal);
}

function mutation(arr) {
let arr0 = arr[0].toLowerCase().split('');
let arr1 = arr[1].toLowerCase().split('');

 for (let i = 0; i < arr1.length; i++) {
    // When a char in arr1 isn't present in arr0 then return false.
     if (!isSame(arr0, `${arr1[i]}`)) {
        return false;
     }
 } 
return true;
}

// testing
mutation(["hello", "Hello"]);
