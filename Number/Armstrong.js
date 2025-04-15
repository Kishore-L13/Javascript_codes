//  armstrong number is a number that is equal to the sum of cubes of its digits
// 153 = 1^3 + 5^3 + 3^3 = 153

const armStrongNumber = (num) => {
    let result = 0
    let originalNumber = num
    while (num > 0) {
        result += Math.pow(num % 10, 3)
        num = Math.floor(num / 10)
    }
    return result === originalNumber
}
console.log(armStrongNumber(153)) // true
console.log(armStrongNumber(35)) // false