async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log("C");
   }
   console.log("D");
   foo();
   console.log("E")
//DAEBC   
let output = (function(x){
    delete x;
    return x;
   })(3);
console.log(output);
   