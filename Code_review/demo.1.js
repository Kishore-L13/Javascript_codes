const p = { k: 1, l: 2 };
const q = { k: 1, l: 2 };
let isEqual = p==q;
let isStartEqual = p=== q;
console.log(isEqual, isStartEqual)//false false

//a) 2+2 = ?
console.log(2 + 2); // Output: 4
//b) "2"+"2" = ?
console.log("2" + "2");
// Output: "22" (string concatenation)
//c) 2+2-2 = ?
console.log(2 + 2 - 2); // Output: 2
//d) "2"+"2"-"2" = ?
console.log("2" + "2" - "2");
// Output: 20 (string "22" is converted
 //to a number, then subtracted by the number 2)
//e) 4+"2"+2+4+"25"+2+2
console.log(4+"2"+2+4+"25"+2+2);
// "42242522"