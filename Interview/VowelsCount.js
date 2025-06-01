const V = (str) => {
    let vowels = ['a','e','i','o','u']
    let count = 0
    let VCount = {}
        for (let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
VCount[str[i]] = (VCount[str[i]] || 0) + 1;
            count ++
        }
    }
    return (count,VCount) 
}