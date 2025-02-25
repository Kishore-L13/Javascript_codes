const desending=(arr) => {
let n = arr.length;
for (let i=0;i<n;i++){
    for(let j=0;j<n-1-i;j++){
        if (arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr)
}
desending([5,6,48,7,9,1])