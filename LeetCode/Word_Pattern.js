function wordPattern(pattern, s) {
    let words = s.split(" ");
    if (pattern.length !== words.length) return false; // If lengths don't match, return false

    let charToWord = new Map();
    let wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];

        // Check if the character is already mapped to a word
        if (charToWord.has(char) && charToWord.get(char) !== word) {
            return false;
        }

        // Check if the word is already mapped to a different character
        if (wordToChar.has(word) && wordToChar.get(word) !== char) {
            return false;
        }

        // Create mappings in both maps
        charToWord.set(char, word);
        wordToChar.set(word, char);
    }

    return true;
}

// Test cases
console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("abba", "dog cat cat fish")); // Output: false
