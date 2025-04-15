const countFactorsForN = n => {
    let count = 0;
    for (let i = 0; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        if (n / i === i) {
          count++;
        } else {
          count += 2;
        }
      }
    }
    return count;
  };
  console.log(countFactorsForN(16)); //[1,2,4,8,16] => 5