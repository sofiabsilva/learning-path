/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

*/

function convertToRoman(num) {
// transform num to array of digits and initialise array for storing result
   var numArr = num.toString().split('').map(Number);
   var result= [];
   // loop through digits array until there are no digits left
   while (numArr.length > 0) {
       var len = numArr.length;
       var p;
       var mid;
    // assign p (pattern) depending on the num of digits
        function checkPattern(digits) {
            switch (digits) {
                case 1:
                    p='I';
                break;
                case 2:
                    p = 'X';
                break;
                case 3:
                    p= 'C';
                break;
                default:
                    p= 'M';
            }
        }
        // assign mid roman numeral according to the num of digits (for 5, 50, 500)
            function check5s(digits) {
            switch (digits) {
                case 1:
                    mid= 'V';
                break;
                case 2:
                    mid = 'L';
                break;
                default:
                    mid= 'D';
            }
        }
        checkPattern(len);
        check5s(len);
        // check the 1st digit and assign the equivalent roman numeral according to it's decimal place 
        var firstDigit = numArr[0];
        // in case of 9, push p to result first, then push the p of case above
        if (firstDigit == 9) {
            result.push(p);
            checkPattern(len+1);
            result.push(p);
        // in case of 4, push p to result first, then push the mid
        } else if (firstDigit == 4){
                result.push(p);
                check5s(len);
                result.push(mid);
        // for I, II and III
        } else if (firstDigit < 4) {
            for (var i=0; i < firstDigit; i++) {
                result.push(p);
            }
        } else if (firstDigit >= 5) {
        // 1st push the mid numeral and loop to get to the first digit
            result.push(mid);
            for (var i=5; i < firstDigit; i++) {
                result.push(p);
            }
        }
        // remove the starting digit from the array of digits
        numArr.shift();
    }
return result.join('');
}
 
convertToRoman(37);
// returns XXXVII
