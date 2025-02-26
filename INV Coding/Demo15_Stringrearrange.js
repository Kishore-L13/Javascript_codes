const anagram = (str1,str2) => {
    if (str1.length !== str2.length){
        return false
    }
    let charcount = {}
    for (let char of str1){
        charcount[char] = (charcount[char]||0)+1
    }
    for (let char of str2){
        if (!charcount[char]) {
            return false
        }
        charcount[char]--
    }
    return true
}

console.log(anagram("hello","elloh"))