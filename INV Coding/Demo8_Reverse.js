const Reverse = (str) => {
        let Rev = []
        for (let i=str.length-1;i>=0;i--){
            Rev = Rev + str[i]
        }
        return Rev
}
console.log(Reverse("hello"))
console.log(Reverse("racecar"))