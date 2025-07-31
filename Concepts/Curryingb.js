const sum = (a)=>{
    return function(b){
            return b?sum(a+b): a
        }
} 

const sums = a =>  b =>  b?sums(a + b) : a;
console.log(sum(1)(2)(3)())