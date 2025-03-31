function func() {
    try {
    console.log(1)
    return
    } catch (e) {
    console.log(2)
    } finally {
    console.log(3)
    }
    console.log(4)
   }
   func()//1 and 3
   const nums = [1,2,3,4,5,6,7];
nums.forEach((n) => {
 if(n%2 === 0) {
 //break;
 }
 console.log(n);
});
//Illegal break statement