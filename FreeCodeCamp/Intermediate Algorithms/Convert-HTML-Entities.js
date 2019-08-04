/*
Convert the characters &, <, >, "(double quote), and '(apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {

  var newStr = str.replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

  return newStr;
}
convertHTML('Stuff in "quotation marks"')
