const readline = require('readline');

function solution(arr) {
    let max = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            second = max;
            max = arr[i];
        } else if (arr[i] >= second && arr[i] < max) {
            second = arr[i];
        }
    }

    if (second === -Infinity) {
        console.log("Khong tim duoc");
        return -1;
    }

    return second;
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(" ", (length) => {
        length = parseInt(length);
        let arr = [];
        let count = 0;


        rl.on('line', (input) => {
            arr.push(parseInt(input));
            count++;

            if (count === length) {
                let result = solution(arr);
                if (result !== -1) {
                    console.log(result);
                }
                rl.close();
            }
        });
    });
}

main();
