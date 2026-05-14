function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}   

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("racecar")); // true
