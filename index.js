const checkPalindrome = (str) => {
  if(str.length <= 0) return false
  if(str.length === 1) return true;
  let splitted = str.split('').reverse().join('');
  return splitted === str;
}

module.exports = checkPalindrome;