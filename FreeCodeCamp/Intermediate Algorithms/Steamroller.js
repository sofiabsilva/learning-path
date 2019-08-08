// Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
// I'm a steamroller, baby

// declare array to push elements into
var newArr = [];
// for each arr element, if not an array push to newArr else run the checkArr function  
for ( var j = 0; j < arr.length; j++) {
  if (!Array.isArray(arr[j])) {
        newArr.push(arr[j]);
      } else {
        checkArr(arr[j]);
      }
}
// for each array inside the 1st arr check if still an array, keep checking inside it until it encounters an element to push to the newArr variable. Break statement when array is empty 
function checkArr(x) {
  for (var i= 0; i < x.length; i++) {
    if (Array.isArray(x[i])) {
       return checkArr(x[i]);
    } else if (x[i] === ''){
      break;
    }
    newArr.push(x[i]);
  }
}
console.log(newArr);
return newArr;
}
steamrollArray([1, [2], [3, [[4]]]])

// returns [1, 2, 3, 4]
