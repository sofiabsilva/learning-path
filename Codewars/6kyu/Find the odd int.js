/* 
Given an array, find the integer that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
// count instances of each number
 var count= A.reduce(function(repeats, number) {
  if(number in repeats) {
  repeats[number]++
  } else {
  repeats[number] = 1
  }
  return repeats
}, {})
// when instances in count are odd, convert to int and return
  for(var number in count) {
    if (count[number] % 2 === 1) {
      return Number(number)
    }
  }
