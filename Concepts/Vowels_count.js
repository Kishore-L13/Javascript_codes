const V = (str) =>{
    let count = 0
    let u = {}
    let vowels = ["a","e","i","o","u"]
    for (let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
        u(str[i]) = (u(str[i]) ||0)+1
        count ++
    }
}
    return count , u
}
console.log(V("kishore"))