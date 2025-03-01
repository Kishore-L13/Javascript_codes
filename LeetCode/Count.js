const Count = (init) => {
    let value = init 
    return{
        increment: ()=>++value,
        reset: ()=> (value=init),
        decrement: ()=>--value
    }
}

const counter = Count(5);
console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement());//4