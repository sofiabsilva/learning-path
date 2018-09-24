// Return the factorial of the provided integer

// Used Recursion (learned in the CS50 course)
function factorialize(num) {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorialize(num -1);
  }
}

// testing
factorialize(5);

// returns: 120
