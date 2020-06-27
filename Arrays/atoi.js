// Implement atoi which converts a string to an integer.

function atoi(str) {
    str = str.trim();
    let nums = [...Array(10).keys()];
    // console.log(nums)
    if (((str[0] == '-' || str[0] == '+') && str.length > 1 && nums.includes(parseInt(str[1]))) ||
        nums.includes((parseInt(str[0])))) {
        let value = parseInt(str);
        if (value > 2 ** 31 - 1) {
            value = 2 ** 31 - 1;
        } else if (value < (-2) ** 31 - 1) {
            value = (-2) ** 31 - 1;
        }
        return value;
    } else {
        return 0;
    }
}

function tests(input, output) {
    let value = atoi(input);
    if (value == output) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(tests("   -42", -42));
console.log(tests("42", 42));
console.log(tests("4193 with words", 4193));
console.log(tests("words and 987", 0));
console.log(tests("- words", 0));
console.log(tests("-91283472332", -2147483648));

