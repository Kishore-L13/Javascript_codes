const original = { a: 1, b: { c: [2,3] } };
const copy = deepClone(original);
copy.b.c.push(4);
console.log(original.b.c); // still [2,3]
