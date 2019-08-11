/*
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
  var name = firstAndLast.split(' ');
  var firstName = name[0];
  var lastName = name[1];
 
  // Complete the method below and implement the others similarly
  this.setFirstName = function(first) {
    firstName = first;
  };
  this.setLastName = function(last) {
    lastName = last;
  }; 
  this.setFullName = function(firstAndLast) {
     name = firstAndLast.split(' ');
     firstName = name[0];
     lastName = name[1];
  }
  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName= function() {
    return lastName;
  };
};

var bob = new Person('Bob Ross');
bob.getFirstName();
// returns Bob
