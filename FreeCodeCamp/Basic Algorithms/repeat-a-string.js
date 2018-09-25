// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  let result = "";
  if (num < 0) {
    return result;
  } else {
    while (num > 0) {
      result += str;
      num--;
    }
  return result;
  }
}

// testing
repeatStringNumTimes("abc", 3);
