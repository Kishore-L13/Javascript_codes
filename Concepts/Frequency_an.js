
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const sentences = [
  "JavaScript is great, and JavaScript is fun!.",
  "I love coding in JavaScript.",
  "Coding is fun when JavaScript works."
];

const max = (str) => {
    const text = sentences.join(" ").toLowerCase().replace(/[.,]/g, "");
  const words = text.split(/\s+/);
    let freq = {}
    for (let word of words){
        freq[word] = (freq[word]||0) + 1 
        }
            //console.log(freq)
     const result = Object.keys(freq).filter(word => freq[word] >= 2);

  return result.join(" ");
}
console.log(max(sentences))