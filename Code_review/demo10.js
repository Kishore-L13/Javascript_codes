var a = 1;
function data() {
if(!a) {
 var a = 10;
}
 console.log(a);
}
data();
console.log(a);
//10 and 1
function guessArray() {
    let a = [1, 2];
    let b = [1, 2];
    console.log(a == b);//false
    console.log(a === b);//false
}
guessArray();
//false false
let a1 = 3;
let b = new Number(3);
let c = 3;
console.log(a1 == b);//true
console.log(a1 === b);//false
console.log(b === c);//false
