function reverseWords(sentence) {
    let words = [];
    let word = "";
    // Splitting words manually (handling spaces)
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            if (word.length > 0) {
                words.push(word);
                word = ""; // Reset word
            }
        } else {
            word += sentence[i];
        }
    }    
    // Push the last word (if exists)
    if (word.length > 0) {
        words.push(word);
    }  
    // Manually reversing the words array
    let reversedSentence = "";
    for (let i = words.length - 1; i >= 0; i--) {
        reversedSentence += words[i];
        if (i !== 0) {
            reversedSentence += " "; // Add space between words
        }
    }
    return reversedSentence;
}

// Example usage:
const sentence = "JavaScript is awesome";
const reversed = reverseWords(sentence);
console.log(reversed);
