// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  var args = Array.from(arguments);
  args.splice(0,1);
  var newArr = [...arr];
  // loop through args and then filter and update newArr with the elements that are different from the args
  for (var i=0; i < args.length; i++) {
    newArr = newArr.filter(el=> el !== args[i]);
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
