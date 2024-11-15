
// used to assign value to variable in js (toán tử gán)
x = 10; y = 20;
x = y ;
console.log(x); console.log(y);
// a **= b -> a = a ** b (so mu)
let name = {
    firstName : "haaa",
    lastName: "eee",
};
console.log(name.firstName);
// a&&=b -> x&&(x = y)
name.firstName &&= "heeee";
console.log(name.firstName);
console.log(name.lastName);
name.lastName &&= "hiii";
console.log(name.lastName);

const readline = require("readline");

// Tạo interface để nhận input từ bàn phím
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
/*tong 2 so lon

rl.question("",(input1) => {
    rl.question("",(input2) => {
        let num1 = BigInt(input1);
        let num2 = BigInt(input2);

        let sum = num1 + num2;

        console.log(sum);
        rl.close();
    });
});
*/

// sorting
let arr = [10, 1010100, 20, 222];
arr.sort();
console.log(arr);
