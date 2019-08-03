/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function uniteUnique(arr) {
  // loop os restantes arrays e push cada valor para o fim do 1º
  // then delete the repeats
  // locate presence of a num arr.indexOf() only add if it returns -1 

  // make new array from arguments, then new array with the first array
  let args= Array.from(arguments);
  var newArr = args[0];
  // loop rest of arrays and push a number if the newArr doesn't include it already
  for (var i=1; i < args.length; i++) {
    args[i].forEach(function(num) {
    if (!newArr.includes(num)) {
      newArr.push(num);
      }
    }) 
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// returns [1, 3, 2, 5, 4]
