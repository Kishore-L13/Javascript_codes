//  GCD or HCF of two numbers is the largest number that divides both of them. A simple way to find GCD is to factorize both numbers and multiply common factors.
//  example: GCD of 20 and 28 is 4
// The Euclidean algorithm, or Euclid's algorithm, is an efficient method for computing the greatest common divisor (GCD) of two numbers, the largest number that divides both of them without leaving a remainder.
//
const gcd = (a, b) => {
    while (a > 0 && b > 0) {
      a > b ? (a = a % b) : (b = b % a);
    }
    return a == 0 ? b : a;
  };
  console.log(gcd(12, 15)); // 3