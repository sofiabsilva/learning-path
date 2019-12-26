/* 
Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.

Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.
*/
function findChildren(santasList, children) {
  // Your code
  var result = [];
  var goodKids = santasList;

 children.forEach(function(name) { 
 
  for (let i = 0; i < goodKids.length; i++) {
    if (goodKids[i] === name) {
    result.push(name);
    goodKids.splice(i, 1);
    i = 0;
    return;
    };
  };
})

var filteredResults = result.filter(function(item, index) {
  if (result.indexOf(item) == index)
    return item;
});
  return filteredResults.sort();
}
