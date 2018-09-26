// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
 
  let originalArr = arr.slice();
  // fixes index of arr if it's already been sliced
  let fix = 0;

  for (let i = 0; i < originalArr.length; i++) {
    let bool = originalArr[i];
    if (Boolean(bool) === false) {
      arr.splice(i - fix, 1);
      fix++;
    }
  }
 return arr;
}

// Testing
bouncer([7, "ate", "", false, 9]);


// Solution using filter: 

function bouncer(arr) {
  return arr.filter(Boolean);
}
