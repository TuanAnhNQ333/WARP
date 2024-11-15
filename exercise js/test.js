const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findSecondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;
    
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }
    
    return second === -Infinity ? "ko tim duoc" : second;
}

rl.question(' ', (n) => {
    n = parseInt(n); 
    
    let numbers = [];
    let count = 0;
    
    function getNumber() {
        if (count < n) {
            rl.question(` `, (input) => {
                numbers.push(parseInt(input));
                count++;
                getNumber();
            });
        } else {
            console.log(findSecondLargest(numbers));
            rl.close();
        }
    }
    
    getNumber();
});
