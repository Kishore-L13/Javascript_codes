function curry(fn) {
    // Your implementation
  return function curried(...args){
    if(args.length>=fn.length){
      return fn(...args);
    }else{
      return function (...nextargs){
        return curried(...args,...nextargs)
      }
    }
  }
}

function sum(A,b,c){
    return A+b+c;
}
const curriedsum=curry(sum);
curriedsum(1)(2)(3)
