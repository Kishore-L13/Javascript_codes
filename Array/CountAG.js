const CountAg = (arr)=> {
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==='a'){
            for (let j=i+1;j<arr.length;j++){
                if(arr[j]==='g'){
                    count++
            }}
        }
    }
    return count
}
console.log(CountAg(["h", "b", "g", "a", "a", "g", "a", "g", "h", "g"])); // 8
