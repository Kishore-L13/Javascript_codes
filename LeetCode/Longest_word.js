const LongestWord = (sentence) => {
    let words = sentence.split(" ")
    let Longest = " "
    for (let i=0;i<words.length;i++){
   if ( words[i].length > Longest.length){
    Longest = words[i]
   }
}
console.log(Longest)
}
LongestWord("hi how r You kishore")