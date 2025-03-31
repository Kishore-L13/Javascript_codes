var x = 23;
(function(){
 var x = 43;

 (function random(){
 x++;
 console.log(x);
 var x = 21;
 })();
})();
//NAN
typeof [1,2,3,4] // Returns object
typeof null // Returns object
typeof NaN // Returns number
typeof 1234n // Returns bigint
typeof 3.14 // Returns number
typeof Symbol() // Returns symbol
typeof "John" // Returns string
typeof 33 // Returns number
typeof true // Returns boolean
typeof undefined // Returns undefined