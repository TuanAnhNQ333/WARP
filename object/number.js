let a  =  156e5;
let b =   156e-5;
console.log(a);
console.log(b);
let c  = a + b;
console.log(c);

let x = 0.22 + 0.12;
let y = (0.22 * 10 + 0.12 * 10) / 10;
console.log(x);
console.log(y);
let z = x + y;
console.log(z);

// ep kieu coercion
// NaN
const result = undefined + 10;
console.log(result); // NaN
// null to 0
const total = null + 5;
console.log(total); // 5
// boolean to number
const num1 = true + 10;
const num2 = false + 10;

console.log(num1);
console.log(num2);
// string to number
const str1 = '42';
const str2 = 'hello';

const numFromString1 = Number(str1);
const numFromString2 = Number(str2);

console.log(numFromString1);
console.log(numFromString2);

// bigint & symbol
const symbolValue = Symbol('mySymbol');


let xx = 21
console.log(xx.toString());
console.log(xx.toExponential());
console.log(xx.toPrecision(4));
console.log(Number.isInteger(xx));
console.log(xx.toLocaleString("bn-BD"));



