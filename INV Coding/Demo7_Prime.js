function isPrime(number) {
    if (number <= 1) {
    return false;
    // 1 and numbers less than 1 are not prime
    }
    // Loop up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
    return false;
    // If divisible by any number, not prime
    }
    }
    return true;
    // If not divisible by any number, it's prime
   }
   // Example usage:
   console.log(isPrime(17)); // true
   console.log(isPrime(19)); // true
   console.log(isPrime(21)); // false
   console.log(isPrime(16)); // false
   console.log(isPrime(69)); // false