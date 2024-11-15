/* return statement is used to stop the function
if no return, return undefined
*/
// return single value
// product(a, b) : return product of a & b
function Product(a, b) {
    return a * b;
};

console.log(Product(6, 10));

// return multiple value
function Language() {
    let first = 'html', 
        second = 'css',
        third = 'javascript'
    return {
        first,
        second,
        third
    };
}
let {first, second, third} = Language();
console.log(first);
console.log(second);
console.log(third);

// no return 
function fun1() {   }
function fun2() { return}
console.log(fun1());
console.log(fun2());


// break
// label 
const fruit = "mango";
switch (fruit) {
    case "Apple":
        console.log("Apple is healthy for our body");
        break;
    case "mango":
        console.log("Mango is a ...");
        break;
    default:
        console.log("I don't like fruits");
}
for(let i = 1; i < 6; i ++) {
    if(i == 4) break;
    console.log(i);
}
// continue
for(let i = 5; i < 11; i ++) {
    if(i % 7 == 0) continue;
    console.log(i);
}




