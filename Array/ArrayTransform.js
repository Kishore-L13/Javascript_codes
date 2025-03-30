function calculateOutput(arr) {
let product = arr.reduce((acc,ccc)=> acc*ccc,1)
return arr.map((num) => Math.round(product / num/10));
}

let inputArray = [10, 4, 6, 7, 3];
let result = calculateOutput(inputArray);
console.log(result);
