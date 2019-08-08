/* Return an English translated sentence of the passed binary string.
The binary string will be space separated.
*/

function binaryAgent(str) {
// create newArr from the initial str
var arr = str.split(' ');
// map through each binary string and change to ASCII 
var toAscii = arr.map(b => String.fromCharCode(parseInt(b, 2)));
// convert to string
var translated = toAscii.toString().replace(/,/g, '');

return translated;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
// returns "Aren't bonfires fun!?"
