// Max occurance & freq of a string.

// I/P: "aabbbcd"
// O/P: b -> 3

const findMaxFreq =(inputString)=>{
    let obj ={}
    for (let char of inputString){
        if(obj[char]){
            obj[char]++
        }else{
            obj[char] =1
        }
    }
    let maxFreq=0;
    let maxChar =""
    for (let char in obj){
        console.log(char)
        if(obj[char]>maxFreq){
            maxChar = char;
            maxFreq = obj[char]
        }
    }
    console.log("maxChar ==>", maxChar, "->",maxFreq)
    }
    findMaxFreq("aabbbcd")