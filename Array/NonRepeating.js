function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null; // If no unique character is found
}

console.log(firstNonRepeatingChar("swiss")); // Output: "w"
