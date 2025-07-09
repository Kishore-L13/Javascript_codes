const Curry = (a)=>{
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
console.log(Curry(2)(3)(6))//36