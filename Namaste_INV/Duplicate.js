function Duplicates(arr) {
  // your code here
  let result = []
  for (let i = 0; i < arr.length; i++){
    if (result.indexOf(arr[i] )== -1) {
      result.push(arr[i])
    }
}
  return result
}
console.log(Duplicates([1, 2, 2, 3, 4, 4]))

