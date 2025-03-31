function x(){
    let a = 10;
    function d(){
    console.log(a);
    }
    a = 500;
    return d;
   }
   var z = x();
   z();//500 - Closures concept
   getData1()//getData11
getData();//uncaught error 
function getData1(){
 console.log("getData11")
}
var getData = () => {
 console.log("Hello")
}
