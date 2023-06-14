/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let res = str.toLowerCase();
  console.log(res);
  for(let i = 0; i < res.length / 2; i++){

      if(res.charAt(i) !== res.charAt(res.length - i - 1)){
          return false;
      }
  }
  return true;
}

let str = "Racecar";
console.log(isPalindrome(str));
module.exports = isPalindrome;