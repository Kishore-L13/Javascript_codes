const recursive = (arr)=> {
    let result = []
    for (item of arr){
        if (Array.isArray(item)){
result = result.concat(recursive(item))
        }else{
            result.push(item)
        }
    }
    return result
}
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(recursive(nestedArray));
