let ar = [1,2,3,4,5,6]
const Even =(array)=>{
    let evennumber = []
for (let i=0;i<array.length;i++){
    if (array[i]%2===0){
     evennumber.push(ar[i]) 
    }  
}
console.log(evennumber)
}
Even(ar)
////filter 
const newarray = ar.filter((item) => {
    return item%2 === 0;
})
console.log(newarray)