/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
var lengths = [];
s.split(' ').forEach(string => lengths.push(string.length));
// sort numbers correctly
return lengths.sort((a, b) => a - b)[0]
}
