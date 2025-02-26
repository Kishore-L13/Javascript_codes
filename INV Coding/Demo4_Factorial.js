const Factorial = (num) => {
   
    if (num === 0 || num===1){
        return 1
    }else {
        return num*Factorial(num-1)
    }  
}
console.log(Factorial(5))
let num = 5
/// another filter 
const Factorial1 = (num) => {
let Fact =1
for (let i=1; i<=num;i++){
 Fact = Fact * i
}
console.log(Fact)
}
Factorial1 (6)