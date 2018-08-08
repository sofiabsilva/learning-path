/*Very simple, given a number, find its opposite.
Examples:
1: -1
14: -14
-34: 34
But can you do it in 1 line of code and without any conditionals? */


// My solution:

function opposite(number) {
return Number(`-${number}`) || Math.abs(number);
}

// I didn't realise we could just do this (duh):

function opposite(number) {
  return(-number);
}
