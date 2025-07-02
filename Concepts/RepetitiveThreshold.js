const findRepetitiveAboveThreshold = (arr,threshold) => {
    let count = {}
    for(let i =0 ; i<arr.length;i++){
       const [id, valueStr] = arr[i].split(":");
    const value = parseInt(valueStr);

    if (value > threshold) {
      count[id] = (count[id] || 0) + 1;
    }
    }
    console.log(count)
    let result = Object.keys(count).find((item)=>count[item]>1)
    console.log(result)
}

const input = ["S1:200", "S2:200", "S2:300", "S1:250", "S2:300"];
const threshold = 250;
findRepetitiveAboveThreshold(input,threshold)