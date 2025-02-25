const Duplicate = (num) => {
let unique = [];

for (let i=0;i<num.length;i++){
    if (unique.indexOf(num[i]) == -1){
        unique.push(num[i])
    }
}
console.log(unique)
}
let ar = [1,2,3,2,4,5,5,6]
Duplicate(ar)
//////Using set 
console.log ("shortcut",new Set(ar))
console.log ("Shortcut", [...new Set(ar)])
////using reduce
const removeDuplicates = (array) => 
array.reduce((acc, item) => acc.includes(item) ? acc : [...acc, item], []);
  ///using filter 
  const removeD = (array) => 
    array.filter((item, unique) => array.indexOf(item) === unique);
    
  console.log(removeDuplicates([1, 2, 1, 3, 4, 2, 2, 1]));
  console.log(removeD([1, 2, 1, 3, 4, 2, 2, 1]));
  
