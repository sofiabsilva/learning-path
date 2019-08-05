/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

// function to check if prime, returns a boolean
function checkForPrime(num) {
  // Checks division by all nums, until 2. If it has a modulo of 0, then it's not prime.
    if (num === 2) {
        return true;
    }
    for (var i = 2; i < num; i++) {
    if ( num % i == 0) {
        return false;
      } 
    }
    return true;
}

function sumPrimes(num) {
// check which nums are prime and add them to the primes var
var currentNum = num;
var primesSum = 0;
while (currentNum > 1) {
  if (checkForPrime(currentNum)) {
       primesSum += currentNum;
    }
  currentNum --
}
return primesSum;
}

 sumPrimes(10);
 // return 17
