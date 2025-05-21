function curry(fn) {
    // Your implementation
    return function curried(...b) {
        if (b.length >= fn.length) {
            return fn(...b)
        }
        else {
            return function (...c) {
                return curried(...b, ...c)
          }
        }
    }
}
console.log(curry(1,2,3))