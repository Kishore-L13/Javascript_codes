// const Capital_word = (str) => {
// let result = ""
//     for (let i=0;i<str.length;i++){
//         if (str[i-1]===""||i===0){
//             result=str[i].toUpperCase()
//         }else{
//             result+=str[i]
//         }
//     }
//     return result
// }
const Capital_word = (str) => {
  // Your implementation
    return str.trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
console.log(Capital_word("hello world"))