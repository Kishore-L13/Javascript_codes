function stringToObject(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Invalid JSON string:", error);
        return null;
    }
}

// Example usage:
const jsonString = '{"name": "Kishore", "age": 25, "city": "Bangalore"}';
const obj = stringToObject(jsonString);
console.log(obj);
/////////////////////////////////////////////////////
function stringToObject(str, finalValue) {
    const keys = str.split('.');
    let result = {};
    let current = result;
    for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    current[key] = (i === keys.length - 1) ? finalValue : {};
    current = current[key];
    }
    return result;
   }
   // Test the function
   const output = stringToObject("a.b.c", "someValue");
   const output1 = stringToObject("a.b.c", "someValue");
   console.log(output);
   