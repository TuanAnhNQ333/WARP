// toan tu 1 ngoi : 1 toan hang duy nhat
// thuc hien nhieu hoat dong
// NaN : Not a Number

let str1 = '12';
let num = +str1;
let num2 = -str1;
console.log(num);
console.log(num2);

console.log(typeof(num));
let str2 = +"hiii"
let str22 = -"heee";
console.log(str2);
console.log(str22);

let num33 = 18;
let str = "GeeksforGeeks";
let isTrue = true;
let obj = { name: "Aman", age: 21 };
let undefinedVar;

console.log(typeof num33);
console.log(typeof str);
console.log(typeof isTrue);
console.log(typeof obj);
console.log(typeof undefinedVar); 

let person = {
    name: "Ankit",
    age: 21,
    city: "Noida"
};

console.log(person);

// Deleting the 'age' property 
// from the 'person' object
delete person.age;

console.log(person);

