function reverseString(str) {
  let strArray = str.split('');
  let resultingStr = [];
  for (let i = strArray.length; i >= 0; i--){
    resultingStr.push(strArray[i]);
  }
  str = resultingStr.join('');
  return str;
}

//testing
console.log(reverseString("hello"));
// returns olleh
