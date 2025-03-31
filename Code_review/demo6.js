// let a = true;
// setTimeout(() => {
//  a = false;
// }, 2000)
// while(a) {
//  console.log(' -- inside whilee -- ');
// }
// ///Infinite loop
setTimeout(() => console.log(1), 0);
console.log(2);
new Promise(res => {
 console.log(3)
 res();
}).then(() => console.log(4));
console.log(5);//2,3,5,4,1