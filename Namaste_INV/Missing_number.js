const Missing_num = (num) => {
    const n = num.length;
    const expectedsum = (n * (n + 1)) / 2;
    const actualsum = num.reduce((acc, num) => acc + num, 0);
    return expectedsum - actualsum
}
console.log(Missing_num([3,0,1]))