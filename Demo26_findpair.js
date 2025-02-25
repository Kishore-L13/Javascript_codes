const findPairs =(arr,target) => {
    let pair = []
    let s = new Set()
    for (let num of arr){
        let Complement = target-num;
        if(s.has(Complement)){
            pair.push([Complement,num])
        }
        s.add(num)
}
return pair    
}
let input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let input2 = 10;
console.log(findPairs(input1,input2))