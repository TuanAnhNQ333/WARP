// câu lệnh, biểu thức, biến , ham , toán tử, cấu trúc
/*
syntax : cú pháp js
2 loại giá trị : cố định và biến
*/

let num1 = 50; let num2 = 50.05;
let str1 = "hehe"; let str2 = "hehehe";
console.log(num1); console.log(num2);
console.log(str1); console.log(str2);

// global variable
let Name = "Apple";
// function
function MyFunction() {
    // local variable
    let num = 45;
    // display global
    console.log(Name);
    // display local
    console.log(num);
}
// function call
MyFunction();
// operator : toán tử
let x, y, sum; x = 3; y = 33; sum = x + y; 
console.log(sum);
// expression : bieu thuc 
let xx, num, sums;
x = 20; y = 30; num = x / 2; sum = x + y; 
console.log(num + "\n" + sum);
// function : the block of code used to perform some particular operation
function func() {
    let numnum = 45;
    console.log(numnum);
}
func();