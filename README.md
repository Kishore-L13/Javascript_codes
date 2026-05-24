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
#Program to find longest word in a given sentence
const str = "hi there happy coding "
const longest = (str)=>{
    const word = str.split(" ")
    let long = ""
    for (let i =0;i<word.length;i++){
        if (word[i].length>long.length){
            long = word[i]
        }
    }
    console.log(long)
}
longest(str)
#Write a JavaScript program to find the maximum number in an array
const ar = [0,1,2,3,4,5,6]
const maximum = (ar)=>{
    let max = ar[0];
    if (ar === 0){
        return undefined 
    }
    for (let i=0; i<ar.length;i++){
        if (ar[i]>max){
            max = ar[i]
        }
    }
    console.log(max)
}
maximum(ar)
#prime

const num = 13
const prime = (num)=>{
if (num<=1){
    return false
}
for (let i=2;i<=Math.sqrt(num);i++){
    if (num%i == 0){
        return false
    }else{
        return true
    }
}
}
console.log(prime(13))
#rev
const str = "hello there"
const rev = (str)=>{
    let r = ""
    for (let i=str.length-1;i>=0;i--){
        r += str[i]
    }
    console.log(r)
}
rev(str)
#fibonacci
const fibonacci = (n)=>{
   if(n<=0){
       return []
   }else if (n==1){
       return [0]
   }
   let seq = [0,1]
   for (let i=2;i<n;i++){
       const fib = seq[i-1] + seq[i-2]
       seq.push(fib)
   }
 console.log(seq)
}
fibonacci(n)