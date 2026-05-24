Some Coding problems solved <br>
Happy coding 
#1 Write a program to remove duplicates from an array 
const ar = [1,2,2,3,4,4,3,5];
const duplicate = (ar)=>{
    let remove = []
    for (let i=0;i<=ar.length-1;i++){
        if ((remove.indexOf(ar[i]) == -1)){
            remove.push(ar[i])
        }
    }
    console.log(remove)
}
duplicate(ar)
#2.How to check whether a string is palindrome or not ?
const str = 'raceca'
const palin = (str)=>{
    let len = str.length
    for (let i=0;i<len/2;i++){
        if (str[i]===str[len-i-1]){
            return "PAL"
        }else{
            return "NOT"
        }
    }
}
console.log(palin(str))
#FacT
const fact = (num)=>{
    if (num ===0 || num === 1){
        return 1
    }else{
        return num * (fact(num-1))
    }
}
console.log(fact(5))