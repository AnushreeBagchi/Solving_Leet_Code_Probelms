// Symbol       Value


function romanToInteger(romanStr) {
    let integer = 0;
    let dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    for (let i=0; i< romanStr.length; i++) {
        let lit = romanStr[i];
        let nextLit = romanStr[i+1];
        if (dict[lit] < dict[nextLit]) {
            integer += dict[nextLit] - dict[lit];
            i+=1;
        } else {
            integer += dict[lit];
        }
    }
    return integer;
}

function test(input, output) {
    let value = romanToInteger(input);
    if (value == output) {
        return "Pass";
    } else {
        return "Fail"
    }
}

console.log(test("VII", 7));
console.log(test("XLII", 42));
console.log(test("IX", 9));
console.log(test("LVIII", 58));
console.log(test("MCMXCIV", 1994));
console.log(romanToInteger("MMMCMXCIX"));




