/**
 * toan tu comma : danh gia toan hang trai > phai
 * tra ve gia tri ngoai cung ben phai
 dung nhu dau phan cach cho bieu thuc
 
 */


function func1() {
    console.log('one');
    return 'one';
}
function func2() {
    console.log('two');
    return 'two';
}
let x = (func1(), func2());
console.log(x);

// for loop
for(let a = 0, b = 5; a <= 5; a ++, b --) {
    console.log(a, b);
}
// multi variable

let a1 = 1, b1 = 2 , c1 = 3;
console.log("initial value");
console.log("a:", a1)
console.log("b;", b1)
console.log("c", c1)

(a1 *= 2), (b1 *= 3), (c1 *= 4);

console.log("update value");
console.log("a:", a1);
console.log("b:", b1);
console.log("c:", c1);



