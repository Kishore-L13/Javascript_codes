function reverseWords(s) {
    // Step 1: Trim extra spaces and split the string into words
    let words = s.trim().split(/\s+/);
    let result = "";
    // Step 2: Iterate from the last word to the first using a for loop
    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i];
        if (i > 0) result += " "; // Add space between words (but not at the end)
    }
    return result;
}

// Test cases
console.log(reverseWords("the sky is blue")); // Output: "blue is sky the"
console.log(reverseWords("  hello world  ")); // Output: "world hello"
console.log(reverseWords("a good   example")); // Output: "example good a"
console.log(reverseWords("  Bob    Loves  Alice   ")); // Output: "Alice Loves Bob"
console.log(reverseWords("Alice does not even like bob")); // Output: "bob like even not does Alice"
