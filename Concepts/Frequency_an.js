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

// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler
// const sentences = [
//   "JavaScript is great, and JavaScript is fun.",
//   "I love coding in JavaScript.",
//   "Coding is fun when JavaScript works."
// ];

// const max = (str) => {
//     const text = sentences.join(" ").toLowerCase().replace(/[.,]/g, "");
//   const words = text.split(/\s+/);
//     let freq = {}
//     for (let word of words){
//         freq[word] = (freq[word]||0) + 1 
//         }
//             //console.log(freq)
//      const result = Object.keys(freq).filter(word => freq[word] >= 2);

//   return result.join(" ");
// }
// console.log(max(sentences))