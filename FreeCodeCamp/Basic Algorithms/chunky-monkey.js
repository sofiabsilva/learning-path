// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
 let spliced;
 let finalArr = [];
   // Every time the loop runs, the array will be cut short by splicing it. When the array is smaller than size it still works!
   while (arr.length) {
    spliced = arr.splice(0, size);
    finalArr.push(spliced);
  }
  return finalArr;
}
// testing
chunkArrayInGroups(["a", "b", "c", "d"], 2);
