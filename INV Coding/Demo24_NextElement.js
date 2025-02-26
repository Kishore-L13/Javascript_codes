const nextElement = (arr) => {
    let result = []
    for (let i = 0;i < arr.length; i++){
        if (i<arr.length-1){
        let next1 = arr[i + 1] || 1 ;
        let next2 = arr[i + 2] || 1;
        result.push(next1*next2)
        }
        else{
            result.push(arr[0]*arr[1])
        }
    }
    return result
}
console.log(nextElement([3,4,5]))
console.log(nextElement([2,6,8,10]))
////////////////////////
function productOfNextTwo(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let next1 = arr[i + 1] || 1; // If no next element, use 1
        let next2 = arr[i + 2] || 1; // If no second-next element, use 1
        result.push(next1 * next2);     
    }

    return result;
}

// Example usage:
console.log(productOfNextTwo([3, 4, 5]));