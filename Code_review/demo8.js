for (var i = 0; i < 3; i++) {
    setTimeout(function () {
    console.log(i);
    }, 1000 + i);
}
//333
function getName1(){
    console.log(this.name);
    }
    Object.prototype.getName2 = () =>{
    console.log(this.name)
    }
    let personObj = {
    name:"Tony",
    print:getName1
    }
    personObj.print();//Tony
    personObj.getName2();//Undefine