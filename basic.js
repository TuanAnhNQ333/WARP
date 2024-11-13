// khai bao bien
let name = "John";
const PI = 3.14;
console.log(name);
console.log(PI);
// kieu du lieu
// number, string, boolean, null, undefined, symbol, bigint
console.log(typeof 1234);
// toan tu : so sanh : === : so sanh 2 so cung kieu
let x = 100;
// if - else
if(x > 10)
{
    console.log("greater than 10");
}
else
{
    console.log("less");
}
// switch - case
let day = "Monday";
switch(day)
{
    case "Mon":
        console.log("start week");
        break;
    default:
        console.log("another day");
}
// loop
// for : duyet qua 1 pham vi xac dinh lan lap
for(let i = 0; i < 5; i ++)
{
    console.log(i);
}
// while
let i = 0;
while (i < 5)
{
    console.log(i);
    i++;
}
// function
function greeting(name)
{
    return " hello " + name;
}
console.log(greeting("john"));
// arrow function
const greet = (name) => "hello" + name;
// object & array
let person = {name: "tom", age: 25};

let fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);
// Document Object Model
const { JSDOM } = require("jsdom");

const dom = new JSDOM(`<html><body><p id="demo"></p></body></html>`);
const document = dom.window.document;

document.getElementById("demo").innerHTML = "hello";
console.log(document.getElementById("demo").innerHTML); // Output: hello

//
async function fetchData() {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  }
// class : tao nen doi tuong
