const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(arr, length) {
    if (length < 2) {
        return -1;
    }

    let max = Number.MIN_SAFE_INTEGER;
    let second = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < length; i++) {
        if (arr[i] > max) {
            second = max;
            max = arr[i];
        } else if (arr[i] > second && arr[i] < max) {
            second = arr[i];
        }
    }

    return second === Number.MIN_SAFE_INTEGER ? -1 : second;
}

function main() {
    readline.question("", (lengthInput) => {
        const length = parseInt(lengthInput);

        if (isNaN(length) || length <= 0) {
            readline.close();
            return;
        }

        let arr = [];

        readline.question("", (input) => {
            arr = input.split(" ").map(Number);
            if (arr.length !== length || arr.some(isNaN)) {
                readline.close();
                return;
            }

            if (arr.length !== length) {
                readline.close();
                return;
            }

            const result = solution(arr, length);
            console.log(result !== -1 ? result : "khong tim duoc");
            readline.close();
        });

        // Cho phép người dùng nhập thêm các phần tử trên nhiều dòng nếu muốn
        readline.on('line', (line) => {
            const newArr = line.split(" ").map(Number);
            arr = arr.concat(newArr);
        });
    });
}

main();
