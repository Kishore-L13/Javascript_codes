const count = (arr) => {
    let zerocount = 0
    let result = 0
    for (let i=0;i<arr.length-1;i++){
        if(arr[i]===0){
            zerocount++ 
        }
    }
    for (let i=0;i<arr.length;i++){
        if (i < zerocount) {
            arr[i] = 0;
        } else {
            arr[i] = 1;
        }
}
return arr
}
let arr = [1, 0, 1, 0, 1, 0, 1, 1, 0, 0];
console.log(count(arr)); // Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
