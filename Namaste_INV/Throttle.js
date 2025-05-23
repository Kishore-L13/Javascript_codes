/**
 * Creates a throttled function that only invokes the provided function
 * at most once per every `delay` milliseconds
 *
 * @param {Function} func - The function to throttle
 * @param {number} delay - The number of milliseconds to throttle invocations to
 * @return {Function} Returns the new throttled function
 */
function throttle(func, delay) {
  // Write your code here
  let lastCall = 0;
  let lastResult;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      lastResult = func.apply(this, args)
      return lastResult;
    }
    return lastResult
  }
}
const throttledFn = throttle(() => console.log('Function called!'), 1000);
