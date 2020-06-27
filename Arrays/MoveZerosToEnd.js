// Move all the zeros to the end keeping the order of the non zero intact
function moveZeroToEnd(arr) {
    let pointerPos = 0;
    for (let i=0; i< arr.length; i++) {
        if(arr[i] !== 0) {
            arr[pointerPos] = arr[i];
            arr[i] =0;
            pointerPos+=1;
        }
    }
}
let arr = [0,1,0,3,12];

moveZeroToEnd(arr);
console.log(arr)

/* space-complexity : O(1) --> same array is used
 time-complexity : O(n) --> looping once through the entire array */