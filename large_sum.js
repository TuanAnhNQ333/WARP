const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addBigNumbers(num1, num2) {
    num1.reverse();
    num2.reverse();
    let result = [];
    let carry = 0;
    let length = Math.max(num1.length, num2.length);

    for (let i = 0; i < length; i++) {
        let digit1 = num1[i] || 0;
        let digit2 = num2[i] || 0;
        let sum = digit1 + digit2 + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
    }

    if (carry > 0) {
        result.push(carry);
    }

    result.reverse();
    return result;
}

rl.question("", (num1Str) => {
  rl.question("", (num2Str) => {
    let num1 = num1Str.split('').map(Number);
    let num2 = num2Str.split('').map(Number);
    let sum = addBigNumbers(num1, num2);
    console.log(sum.join(''));
    rl.close();
  });
});
