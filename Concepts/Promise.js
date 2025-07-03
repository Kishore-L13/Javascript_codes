const s = true
const p = new Promise((resolve,reject)=>{
    if (s === true){
        resolve ("Data store")
    }else{
        reject ("Data not store")
    }
})

p.then((data)=>{console.log("S",data)}).catch((err)=>{
    console.log("R",err)
})