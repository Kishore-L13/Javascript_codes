function groupBy(arr, key) {
    // Your implementation
  const result = {};
  for (const item of arr){
    const keyValue = item[key];
    if (!result.hasOwnProperty(keyValue)){
      result[keyValue] = []
    }
    result[keyValue].push(item)
  }
  return result
}
const a = [
    { name: "Abc", age: "25" },
    { name: "efg", age: "25" },
    { name: "xyz", age: "30" },
    { name: "xyz", age: "30" }
  ];
  
  console.log(groupBy(a, 'age'));