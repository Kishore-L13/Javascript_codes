const name1 = {
    fristName : "abc",
    lastName : "EFG"
}
const name2 = {
    fristName:"bcd",
    lastName:"ops"
}
 const printname = function(third){
    console.log(this.fristName,this.lastName,third)
}
printname.call(name1,("xyh"))
printname.apply(name2,["efg"])
const b = printname.bind(name1,("bind"))
b()