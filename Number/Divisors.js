const divisors = n => {
    let divs = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        divs.push(i);
        if (n / i !== i) {
          divs.push(n / i);
        }
      }
    }
    return divs;
  };
  console.log(divisors(10)); // [ 1, 10, 2, 5 ]
  console.log(divisors(9)); // [ 1, 9, 3 ]