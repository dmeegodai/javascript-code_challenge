function isPalindrome(str) {
  const updatedStr = str.toLowerCase().replace(/\s/g, "");
  const reversedStr = updatedStr.split('').reverse().join('');
  if (updatedStr === reversedStr) {
    return true;
  } else return false;
}

console.log(isPalindrome("racecar"));       
console.log(isPalindrome("Madam"));         
console.log(isPalindrome("nurses run"));    
console.log(isPalindrome("hello"));

