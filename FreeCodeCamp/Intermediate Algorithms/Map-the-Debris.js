/* 
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
You can read about orbital periods on Wikipedia.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  // formula 
  // T= 2pi squareroot (avgAlt + earth radius)^3 / GM
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
// function to calculate the orbital period:
function calcT(avgAlt) {
  return Math.round(2 * Math.PI * Math.sqrt(Math.pow((avgAlt + earthRadius), 3)/GM));
}
  // add orbitalPeriod to each object and return only name and orbitalPeriod
var newArr = arr.map(function(obj) {
  obj.orbitalPeriod = calcT(obj.avgAlt);
  return {name: obj.name, orbitalPeriod: obj.orbitalPeriod};  
})
  return newArr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// returns [{name: "sputnik", orbitalPeriod: 86400}]
