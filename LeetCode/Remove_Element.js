const RemoveElement = (num,val) => {
    let j = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== val) {
           num[j] = num[i];
            j++;
        }
    }
    return j;
}
let num = [3,2,2,3]
let val = 3
console.log(RemoveElement(num,val))