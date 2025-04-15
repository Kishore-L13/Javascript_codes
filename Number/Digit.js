const countDigits = x => {
    let count = 0;
    while (x > 0) {
      x = Math.floor(x / 10);
      count++;
    }
    return count;
  };
  console.log(countDigits(80));
  
  const countDigits1 = x => {
    return Math.floor(Math.log10(x) + 1);
  };
  console.log(countDigits1(801234));