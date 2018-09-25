// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  let result = "";
  let i = num;
  if (num < 0) {
    return result;
  } else {
    while (i > 0) {
      result += str;
      i--;
    }
  return result;
  }
}

// testing
repeatStringNumTimes("abc", 3);
