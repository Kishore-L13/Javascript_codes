const palindrone = (str) => {
    let len = str.length;
    for (let i=2;i<len;i++){
        if (str[i]===str[len-i-1]){
            return "Palindrone"
        }else{
            return "Not Palindrone"
        }
    }
}
console.log(palindrone("racecar"))