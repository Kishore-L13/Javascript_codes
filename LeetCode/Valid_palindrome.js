const isPalindrome = function(s) {
    // Step 1: Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Step 2: Use a for loop with all 3 parts (initialization; condition; update)
    for (let left = 0, right = cleanedStr.length - 1; left < right; left++,right--) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            console.log("not a palindrome",cleanedStr); // If characters don't match, it's not a palindrome
        }
    }

 console.log("palindrome",cleanedStr); // If loop completes, it's a palindrome
}

isPalindrome("A man, a plan, a canal: Panama")