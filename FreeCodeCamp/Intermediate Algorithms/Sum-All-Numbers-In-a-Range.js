// The lowest number will not always come first.

function sumAll(arr) {
 // sort the numbers
 var sorted = arr.sort((a,b) => a - b);
 // new array to push the range of numbers in between a and b (inclusive)
 var newArr= [];
 for (var i = sorted[0] ; i <= sorted[1]; i++ ) {
    newArr.push(i);
 }
 // use reduce to get the sum of the new array's numbers.
 return newArr.reduce((a, b) => a + b);
}

sumAll([10, 5])
// returns 45
