// const Lower_word = (str) => {
// let result = ""
//     for (let i=0;i<str.length;i++){
//         if (str[i-1]===""||i===0){
//             result=str[i].toLowerCase()
//         }else{
//             result+=str[i]
//         }
//     }
//     return result
// }
const Lowest_word = (str) => {
  // Your implementation
    return str.trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toLowerCase() + word.slice(1).toUpperCase()).join(' ');
}
console.log(Lowest_word("hello world"))