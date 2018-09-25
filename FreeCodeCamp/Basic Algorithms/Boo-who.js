// Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
  if (typeof(bool) === 'boolean') {
    return true;
  } else {
    return false;
  }
}
// testing
booWho(null);
