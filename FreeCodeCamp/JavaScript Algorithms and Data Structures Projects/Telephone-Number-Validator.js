/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

*/
function telephoneCheck(str) {
 // take out all the possible special chars
 var digits = str.replace(/[-()\s]/g, '')

 // the digits var should now only have digits and a length of 10 or 11 
  if (digits.length === 10 && /^\d+$/.test(digits)) {
     return /^(\(\d{3}\)|(\d{3}))(-?|\s?)\d{3}(-?|\s?)\d{4}/.test(str);
  } else if (digits.length === 11 && /^\d+$/.test(digits)){
     return /^1(-?|\s?)(\(\d{3}\)|(\d{3}))(-?|\s?)\d{3}(-?|\s?)\d{4}/.test(str);
  } 
return false;
}
 
telephoneCheck("555-555-5555"); 
