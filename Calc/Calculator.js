const calculate = (s) =>{
    const token = s.match(/(\d+)|[+-/*]/g);
    const stack = [+token.at(0)];
    const opertor = {
        '+': (num) => stack.push(num),
        '-': (num) => stack.push(-num),
        '*': (num) => stack.push(stack.pop()*num),
        '/': (num) => stack.push(stack.pop()/num),
    }
    for(let i=1;i<token.length;i+=2){
        opertor[token[i]](+token[i+1])
    }
    return stack.reduce((a,b)=>a+b,0)
}
console.log(calculate("3+2+2"))
console.log(calculate("3+2-2"))
console.log(calculate("3*2"))
console.log(calculate("3/2"))
console.log(calculate("3/2*2"))