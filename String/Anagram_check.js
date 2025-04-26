const isAnagram =(str1,str2)=>{
const format = str => 
    str.toLowerCase().replace(/[^a-z]/g,''.split('').sort().join(''))
return format(str1) === format(str2)
}

console.log(isAnagram("racecar","racecar"))