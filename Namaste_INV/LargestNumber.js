function formLargestNumber(arr) {
  //write your implementation here
  if (arr.length === 0) return "0";

  const strArr = arr.map(String); // Convert all numbers to strings

  strArr.sort((a, b) => (b + a).localeCompare(a + b)); // Custom sort

  if (strArr[0] === "0") return "0"; // Edge case: all zeros

  return strArr.join(''); // Concatenate and return
}
const input = [3, 30, 34, 5, 9];
console.log(formLargestNumber(input));