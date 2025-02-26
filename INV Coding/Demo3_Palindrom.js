const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Normalize input
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false; // More logical return value
        }
    }
    return true;
};

// Example usage:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
///////////////Another type
const checkPallindrome = (str) => {
    const len = str.length;
    for (let i = 0; i < len/2; i++) {
    if (str[i] !== str[len - i - 1]) {
    return "Not pallindrome";
    }
    }
    return "pallindrome";
   };
   console.log(checkPallindrome("madam"));
   console.log(checkPallindrome("mam"));
   