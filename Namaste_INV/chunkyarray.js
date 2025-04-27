function chunkArray(arr, n) {
    // Your implementation
  const result = [];
  for (let i=0; i<arr.length;i+=n){
    result.push(arr.slice(i,i+n))
  }
  return result;
}
console.log(chunkArray([1,2,3,4],2))