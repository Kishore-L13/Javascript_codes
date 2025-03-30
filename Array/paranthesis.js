function generateParentheses(n) {
    let result = [];
    function backtrack(s, open, close) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }
        if (open < n) backtrack(s + "(", open + 1, close);
        if (close < open) backtrack(s + ")", open, close + 1);
    }
    backtrack("", 0, 0);
    return result;
}
console.log(generateParentheses(3)); 
