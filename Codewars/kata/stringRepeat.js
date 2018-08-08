// Write a function called repeatStr which repeats the given string string exactly n times.
// ex:
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
let string = "";
  for (let i = 0; i < n; i++) {
       string+=s;
    }
  return string;
}
