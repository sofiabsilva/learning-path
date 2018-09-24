// Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  // array to store the largest number of each array
  let finalArray = [];

  // iterate through outer array
  for (let i = 0; i < arr.length; i++) {
  // highest value will be stored here on each cycle
  let current = arr[i][0];
    // iterate through inner arrays and update current
    for (let j = 0; j < arr[i].length; j++) {
      if (current <= arr[i][j]){
        current = arr[i][j];
      }
    }
  finalArray.push(current);
  }
  return finalArray;
}

// testing
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
