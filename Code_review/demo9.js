function test() {
    console.log(a);//undefined
    console.log(foo());//2
    var a = 1;
    function foo() {
    return 2;
    }
   }
   test();//Undefined and 2
   function job(){
    return new Promise((resolve,reject)=>{
    reject()
    })
   }
   let promise = job();
   promise.then(()=>{
    console.log("1111111111")
   }).then(()=>{
    console.log("22222222222")
   }).catch(()=>{
    console.log("3333333333")
   }).then(()=>{
    console.log("4444444444")
})
//3333333333
//4444444444