/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

// This one was the hardest one for me, had to check solutions to understand it
// get range of nums
function range(size, startAt) {
 return [...Array(size).keys()].map(i => i + startAt);
}
 
function smallestCommons(arr) {
// get min and max of the array
var min = Math.min(arr[0], arr[1]);
var max = Math.max(arr[0], arr[1]);

var size = max - min;
// use ranges array to store the range 
var ranges = range(size +1, min);
// start checking for smallest common multiple with the max number in the range
var mult = max;
// keep checking if the multiples of max are evenly divisible by all nums in the range
while (!ranges.every(n => mult % n===0 )) {
  mult+=max;
}
return mult;
}
smallestCommons([23, 18]);
