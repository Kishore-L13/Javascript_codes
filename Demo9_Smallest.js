const SmallestWord = (sentence) => {
    let words = sentence.split(" ")
    let Smallest = words[0]
    for (let i=0;i<words.length;i++){
   if ( words[i].length < Smallest.length){
    Smallest = words[i]
   }
}
console.log(Smallest)
}
SmallestWord("hi how r a You kishore")