const Curry = (a)=>{
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
console.log(Curry(2)(3)(6))//36
console.log([..."abc"])//['a','b','c']
console.log({}==={})//false
console.log({}=={})//false
console.log([]===[])//false
console.log([]==[])//false
console.log([0]==0)//true
console.log(false==[0])//true
console.log(true==[1])//true
console.log([0]==[0])//false
console.log([0]===[0])//false
if(X!=X){
    return true //X=true
}