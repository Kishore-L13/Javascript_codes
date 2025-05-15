const Vowel = (str) => {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    const k = str.toLowerCase();
    for (let c of k) {
        if (vowels.includes(c)) {
            count++;
        }
    }
    return count;
}
console.log(Vowel("abca")); // Output: 2
