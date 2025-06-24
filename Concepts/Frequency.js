const sentences = [
  "JavaScript is great, and JavaScript is fun!",
  "I love coding in JavaScript.",
  "Coding is fun when JavaScript works."
];

const MostFreqTop3 = (str) => {
     const text = sentences.join(" ").toLowerCase();
  const words = text.split(/\s+/);
  const freqMap = {};
  for (let word of words) {
    freqMap[word] = (freqMap[word] || 0) + 1;
  }

  // Sort words by frequency descending
  const sorted = Object.entries(freqMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4) // top 3

  return sorted.map(([word]) => word);
};

console.log(MostFreqTop3(sentences)); // ['javascript', 'is', 'coding','Fun']
