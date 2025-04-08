const DiffEvenodd = (arr) => {
   if(arr.length<1) return 0 
    let maxEven = -Infinity
    let minOdd = Infinity
    for (let i=0;i<arr.length;i++){
        if (arr[i]%2===0 && arr[i]>maxEven){
            maxEven = arr[i]
        }
        if (arr[i]%2!==0 && arr[i]<minOdd){
            minOdd = arr[i]
        }
    }
        if(maxEven === -Infinity || minOdd === Infinity){
            return 0
        }
        return maxEven - minOdd
    }
console.log(DiffEvenodd([1, 2, 3, 4, 5])); // 3
console.log(DiffEvenodd([0, 2, 9])); // -7
console.log(DiffEvenodd([2, 4, 6])); // 0