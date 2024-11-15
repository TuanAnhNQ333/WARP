// number
let n1 = 2; let n2 = 1.3; let n3 = Infinity; let n4 = 'sth'/2;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
// string
let s = "hehe"; let s1 = 'hehee'; let s2 = 'can embed ${s}';
console.log(s); console.log(s1); console.log(s2);
// boolean
let b1 = true; let b2 = false; 
console.log(b1); console.log(b2);
// null 
let age = null; console.log(age);
// undefined
let a; console.log(a); 
// symbol : create unique property key in obj : tạo ra giá trị cho mỗi obj
let s11 = Symbol("tuan"); let s12 = Symbol("tuan");
console.log(s1 == s2);
// bigint : 2^53
let b = BigInt("123456783838383883838388");
console.log(b);
// object : object is crucial, everything in JS is essentially 
let o =  new Object();
let o1 =  {};
// array
let a22 = [1, 2, 3, 4, 5];
console.log(a22);
let a222 = [1, "two", {name: "Object"}, [3, 4, 5]];
console.log(a222);




