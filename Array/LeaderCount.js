// Given an array, the task is to find the number of leaders in it.
// An element is a leader if it is greater than all the elements to its right side.
// The rightmost element is always a leader.
// For example, in the array {16, 17, 4, 3, 5, 2},
// 17 , 5 and 2 are leaders.

const leaderCount = (arr) => {
    let max = [arr.length-1]
    let count = 1
    for (let i=0; i<arr.length;i++){
        if(arr[i]>max){
          max=arr[i]
            count++
        }
    }
    return count
}
console.log(leaderCount([16, 17, 4, 3, 5, 2])); // 3