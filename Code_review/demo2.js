let a = 'jscafe'
a[0] = 'c'
console.log(a)//jscafe
/*Strings are immutable in javascript so we cannot change individual
characters by index where as we can create a new string with desired
modification as below.*/
var x=10;
function foo(){
var x = 5;
console.log(x)
}
foo();//5
console.log(x)//10

