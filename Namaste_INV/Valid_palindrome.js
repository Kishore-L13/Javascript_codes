const palindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Clean the string
    let len = str.length;
    if (str.length === 0 || str.length === 1){
        return true
    }
    for (let i=0;i<len/2;i++){
        if(str[i]!==str[len-i-1]){
            return false
        }
        return true
    }
}
console.log(palindrome("121"))