Some Coding problems solved <br>
Happy coding 
#1 Write a program to remove duplicates from an array 
const ar = [1,2,2,3,4,4,3,5];
const duplicate = (ar)=>{
    let remove = []
    for (let i=0;i<=ar.length-1;i++){
        if ((remove.indexOf(ar[i]) == -1)){
            remove.push(ar[i])
        }
    }
    console.log(remove)
}
duplicate(ar)