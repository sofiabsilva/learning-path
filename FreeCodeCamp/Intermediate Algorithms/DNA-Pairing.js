/** The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
**/

// function to get the base pair 
function returnPair(base) {
  switch(base) {
  case "A":
    return "T"
    break;
  case "T":
    return "A"
    break;
  case "C":
    return "G"
    break;
  default:
    return "C"
  }
}

// transform the string to array and return the pairs
function pairElement(str) {
  let result = [...str];
  result = result.map(char => [char, returnPair(char)])
  return result;
}

pairElement("ATCGA")

// returns [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
