const sum = (a)=>{
    return function(b){
            return b?sum(a+b): a
        }
} 