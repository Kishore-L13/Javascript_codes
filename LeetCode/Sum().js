function sum(a) {
    return function(b) {
        if (b !== undefined) {
            return sum(a + b); // Return sum function to allow chaining
        } else {
            return a; // If no argument, return the accumulated sum
        }
    };
}
//OR
// const sum = (a) => {
//     return b=>{
//         return b? sum(a+b):a
//     }
// }
///OR 
//const sum = a => b=> b?sum(a+b):a
console.log(sum(1)(2)(3)(4)())