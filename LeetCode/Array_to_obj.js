let arr = [1,2,3,4,5]
let obj = {}
for (let i=0;i<arr.length;i++){
    obj[i+1] = arr[i]
}
console.log(obj)

let newarray = arr.reduce((a,it) => ({
    ...a,[it]:it
}),{})
console.log(newarray)