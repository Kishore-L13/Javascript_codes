//Title case

const TitleCase = (str) => {
    let result = ""
    for (let i=0;i<str.length;i++){
        if (str[i-1]===""||i===0){
            result=str[i].toUpperCase()
        }else{
            result+=str[i]
        }
    }
    return result
}
console.log(TitleCase("hello world"));//Hello world