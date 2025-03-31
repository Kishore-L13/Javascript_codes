console.log("Start");
setTimeout(() => {
 console.log("Timeout")
});
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
//start ,End , promise , timeout
// function x(){
//     for(var i=1;i<=5;i++){
//     setTimeout(()=>{
//     console.log(i)
//     },i*1000)
//     }
//    }
//    x();//6

//    function x1(){
//     for(let i=1;i<=5;i++){
//     setTimeout(()=>{
//     console.log(i)
//     },i*1000)
//     }
//    }
//    x1();//1,2,3,4,5

function x1(){
        closure=(i)=>{
        setTimeout(()=>{
        console.log(i)
        },i*1000)
        }
       }
       x1()
       for (var i = 1; i <= 5; i++) {
        // Call the closure function with current value of i
        closure(i);
}       
