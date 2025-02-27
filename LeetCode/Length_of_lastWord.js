const length_of_lastword = (s) =>{
// Trim trailing spaces and split by spaces
let word = s.trim().split(" ");
// Return the length of the last word
return word[word.length - 1].length;
}
// Test case
console.log(length_of_lastword("Hello World")); // Output: 5
console.log(length_of_lastword("   fly me   to   the moon  ")); // Output: 4
console.log(length_of_lastword("luffy is still joyboy")); // Output: 6
console.log(length_of_lastword("a ")); // Output: 1