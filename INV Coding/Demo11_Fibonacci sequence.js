const Fibonnacci = (n) => {
if (n<=0){
    return []
}
if (n===0){
    return[0]
}
let fib = [0,1]
for (let i=2;i<n;i++){
    fib.push(fib[i-1]+fib[i-2])
    //console.log(fib)
}
// const fib1 = document.querySelector("h1")
// const fibSequence = fib;
// fib1.textContent = fibSequence; // Display sequence in h1
console.log(fib)
}
Fibonnacci(10)