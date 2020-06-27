function solution(input_arr){
    let l = [...Array(input_arr.length)];
    let r = [...Array(input_arr.length)];
    let output = [...Array(input_arr.length)];
    //for left product
    for (let i=0;i< input_arr.length; i++) {
        if (i==0){
            l[i] = 1;
        } else {
            l[i] = l[i-1]*input_arr[i-1];
        }
    }
    for (let i=input_arr.length-1; i>=0; i--) {
        if(i == input_arr.length-1){
            r[i] = 1
        } else {
            r[i] = r[i+1]*input_arr[i+1]
        }
    }
    for (let i=0;i< input_arr.length; i++) {
        output[i] = l[i]*r[i]
    }
    return output;
}

console.log(solution([4,5,1,8,2]))