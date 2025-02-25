const Occurance = (str) => {
    let charcount = {}
    for (let char of str){
        charcount[char] = (charcount[char] || 0)+1;
    }
    console.log (charcount)
}

Occurance("hello")
Occurance("world")
Occurance("abbcccddddeea")