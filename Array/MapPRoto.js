Array.prototype.customMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

let arr = [1, 2, 3];
console.log(arr.customMap(num => num * 2)); // Output: [2, 4, 6]
