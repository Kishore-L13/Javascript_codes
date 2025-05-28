const AtoO = (arr)=>{
let obj = {}
for (let i=0;i<arr.length;i++){
    obj[i+1] = arr[i]
}
return obj
}
console.log(AtoO([1,2,3,4,5]))