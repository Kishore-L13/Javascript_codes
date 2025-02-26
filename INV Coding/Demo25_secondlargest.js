const secondlargest = (arr) => {
    if (arr.length <0){
        return null
    }
    let first = -Infinity 
    let second = -Infinity
    for (let num of arr){
        if(num>first){
            second = first
            first = num
        }else if (num >second&&num<first){
            second = num
        }
    }
    return second === -Infinity ? null : second;
}
console.log(secondlargest([100,20,112,22]))
console.log(secondlargest([10, 5, 20, 8, 12]))