function compressString(str) {
  if (!str) return "";  // Edge case: return empty if input is empty

  let result = "";      // Final compressed string
  let count = 1;        // Counter for repeated characters

  // Start from index 1 (since we compare with previous)
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;  // Increment count if character repeats
    } else {
      // If count > 9, add multiple chunks of 'char9'
      while (count > 9) {
        result += str[i - 1] + "9";
        count -= 9;
      }

      // Handle remaining count (1 to 9)
      if (count === 1) {
        const lastNineChunk = result.endsWith(str[i - 1] + "9");

        // If previous chunk was 'char9', now add 'char1' to show extra one
        if (lastNineChunk) {
          result += str[i - 1] + "1";
        } else {
          result += str[i - 1];  // Single char, no count needed
        }
      } else {
        result += str[i - 1] + count;  // Add char with count
      }

      count = 1;  // Reset for next character
    }
  }

  return result;
}
