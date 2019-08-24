/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
- cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.
 
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
// initial variable settings
var change = [];
var ammount = cash - price;
var result = new Object();
var coins = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.0, 20.0, 100];
var times;

// get total cash in drawer 
var totalAvailable = cid.reduce(function(acc, item) {
 acc.total += item[1];
 return acc},{ total: 0 })

// check first if ammount (change) is equal to total cash in drawer (return Closed)
if (Number(totalAvailable.total.toFixed(2)) === ammount) {
       result['status'] = "CLOSED";
       result['change'] = cid; 
       return result;
}
// If there is obvously not enough cash in drawer
if (Number(totalAvailable.total.toFixed(2)) < ammount) {
    result['status'] = "INSUFFICIENT_FUNDS";
    result['change'] = [];
    return result;
}

// make new array element with the single coin/bill value of each  
var arr = cid.map(function(unit, index) {
var arr2 = unit.concat(coins[index]);
return arr2;
})
// loop through the whole array of cash in drawer, starting by the higher values
for (var i = arr.length -1; i >= 0; i-- ) {
  // reset counter
  times= 0;
  // take that coin/bill while ammount left is bigger or equal to cash in drawer
   while (ammount >= arr[i][2] && arr[i][1] >= arr[i][2]) {
        arr[i][1] -= arr[i][2];
        // rounds weirdness of 0.00999999999 for ex. IDK why this happens
        arr[i][1] =  Number(arr[i][1].toFixed(2));
        ammount -= arr[i][2];
        ammount = Number(ammount.toFixed(2));
        times +=1;
    } 
  // add array to change obj only when the coin is taken
   if (times * arr[i][2] != 0) {
     change.push([arr[i][0], times * arr[i][2]])
   }
   if (ammount == 0) {
       result['status'] = "OPEN";
       result['change'] = change;
       console.log(result);  
       return result;
   }
}
// when the ammount of change left can't go to 0 after looping through all the cash in drawer
result['status'] = "INSUFFICIENT_FUNDS";
result['change'] = [];
return result;
}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 2], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
