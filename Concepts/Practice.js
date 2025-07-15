// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const num = 123456
const lastdigit = num%10
console.log(lastdigit)
const firstdigit = (num)=>{
    while (num >= 10) {
  num = Math.floor(num / 10);
  
}
return num
}
console.log(firstdigit(num)); // Output: 1
const reverse = (num)=>{
    let rev = ''
    let strnum = String(num)
    for (let i =strnum.length-1;i>=0;i--){
        rev+=strnum[i]
    }
    console.log(rev)
}
reverse(num)
const maxOfThree = (a, b, c) => {
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else return c;
};

console.log(maxOfThree(10, 25, 15)); // Output: 25

