function isPalindrome(word) {
  // Initialize two pointers
  let left = 0;
  let right = word.length - 1;

  // Compare characters from both ends moving towards the center
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }

  // If no mismatches are found, return true
  return true;
}

/* 
  Pseudocode:
  1. Create a function called `isPalindrome` that takes a single argument `word`.
  2. Initialize two pointers: `left` at the start of the string and `right` at the end of the string.
  3. While `left` is less than `right`:
     - If the characters at `left` and `right` are not the same, return `false`.
     - Move `left` pointer one step to the right and `right` pointer one step to the left.
  4. If the loop completes without finding a mismatch, return `true`.
*/

/*
  Explanation:
  The function checks if a given string reads the same forward and backward by using two pointers. The left pointer starts at the beginning of the string, and the right pointer starts at the end. By comparing characters from both ends moving towards the center, the function can determine if the string is a palindrome. If all corresponding characters match, the function returns `true`. If any mismatch is found, it returns `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  // Additional custom tests
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("abcd"));
}

module.exports = isPalindrome;