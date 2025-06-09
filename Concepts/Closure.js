function counterFunc() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count
  };
}

const counter = counterFunc();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
