const Vowel_Count = (str) =>{
    let vowelsCount = {};
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        for (let i = 0; i < str.length; i++) {
            const char = str[i].toLowerCase();
            if (vowels.includes(char)) {
                vowelsCount[char] = (vowelsCount[char] || 0) + 1;
            }
        }
        return vowelsCount;
}
console.log (Vowel_Count("abca"))