const Poweris = (arr)=>{
    let result = []
    for (let i=0;i<arr.length;i++){
        if (arr[i]%2 ===0){
            result.push(1)
        }else{
            result.push(0)
        }
    }
    console.log("power of 2's:",result)
}
let arr = [2,3,4] 
Poweris(arr)//[1,0,1]