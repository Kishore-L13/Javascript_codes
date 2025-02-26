const Maxnumber = (arr) => {
 let max = -Infinity;
 for (const item of arr){
    if (Array.isArray(item)){
        max = Math.max(max,Maxnumber(item))
    }else{
        max = Math.max(max,item)
    }
 }
 return max
}
const nestedArray = [3, [7, [20, 200], 10], [5, 100]];
console.log(Maxnumber(nestedArray));