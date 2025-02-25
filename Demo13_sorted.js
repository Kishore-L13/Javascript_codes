// function shortcutsort(arr1,arr2){
// return [...arr1,...arr2].sort((a,b) => (a-b))
// }
// console.log(shortcutsort([0, 3, 4, 31], [4, 6, 30]));
const sortedData = (arr1,arr2) => {
    let i = 1;
     let j=1;
     let array1 = arr1[0];
     let array2 = arr2[0];
     let mergedArray = [];
     while(array1 || array2){
     if(array2 === undefined || array1 < array2){
     mergedArray.push(array1);
     array1 = arr1[i];
     i++
     }else{
     mergedArray.push(array2);
     array2 = arr2[j];
     j++
     }
     }
     console.log(mergedArray)
    }
    sortedData([1,3,4,5,],[2,6,8,9])
    sortedData([0, 3, 4, 31], [4, 6, 30])
    