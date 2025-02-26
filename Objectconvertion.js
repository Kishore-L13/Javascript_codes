let arr = [1,2,3,4,5]
let arr1 = ['a','b','c','d','e']
let newarray = arr1.reduce((a,obj)=>(
    {...a,[obj]:obj}
),{})
console.log(newarray)