// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
 // "It's such a fine line between stupid, and clever."
 // --David St. Hubbins

let newStr;
// using regular expressions for underscores and camelCase,
let underscores = /_/g;
let camel = /[a-z][A-Z]/g;
// split and join with "-" on spaces and then underscores
newStr = str.split(/\s+/).join("-");
newStr = newStr.split(underscores).join("-");
 // for camel case a "-" is inserted between the first part and second, dividing the string at every match
  let match;
  while ((match = camel.exec(newStr)) != null) {
      newStr = newStr.substring(0, match.index +1) + "-" + newStr.substring(match.index +1);
  }
  console.log(newStr.toLowerCase())
// change all characters to lowercase
return newStr.toLowerCase();
}

spinalCase("Teletubbies say Eh-oh")
spinalCase("AllThe-small Things")
spinalCase("The_Andy_Griffith_Show");

// returs:
// teletubbies-say-eh-oh
// all-the-small-things
// the-andy-griffith-show
