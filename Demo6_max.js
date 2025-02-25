const Maxnum = (ar) => {
    let max = ar[0]
if (ar.length === 0){
    return undefined
}
for (let i=0; i<ar.length;i++){
    if (ar[i]> max){
        max = ar[i]
    }
}
console.log(max)
}
Maxnum([8,1,2,3,4,5,7,6,-9])