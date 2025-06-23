const sentences = [
  "JavaScript is great, and JavaScript is fun.",
  "I love coding in JavaScript.",
  "Coding is fun when JavaScript works."
];

const getFrequentWords = (sentences) => {
  const text = sentences.join(" ").toLowerCase().replace(/[.,]/g, "");
  const words = text.split(/\s+/);

  const freqMap = {};
  for (let word of words) {
    freqMap[word] = (freqMap[word] || 0) + 1;
  }

  // Get unique words that appear 2 or more times
  const result = [...new Set(words)].filter((word) => freqMap[word] >= 2);
  return result.join(" ");
};

console.log(getFrequentWords(sentences)); // Output: javascript is coding
