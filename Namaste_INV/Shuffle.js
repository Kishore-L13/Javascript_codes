const shuffle = (arr) =>{
const result = arr.slice(); //make a copy
for (let i=result.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [result[i],result[j]]=[result[j],result[i]];//swap
}
return result; 
}
console.log(shuffle([1,2,3,4,5]))