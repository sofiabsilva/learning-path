// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  let strArray = str.split('');
  let resultingStr = "";
  if (strArray.length > num) {
    for (let i = 0; i < num; i++){
      resultingStr += strArray[i];
    }
    return resultingStr + "...";
  } else {
    return str;
  }
}

// testing
truncateString("A-tisket a-tasket A green and yellow basket", 8);
