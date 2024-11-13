const readline = require("readline").createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function solution(arr, length)
{
    let max = Number.MIN_SAFE_INTEGER;
    let second = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < length; i ++)
    {
        if(arr[i] > max)
        {
            second = max;
            max = arr[i];
        }
        else if(arr[i] >= second && arr[i] < max)
        {
            second = arr[i];
        }
    }
    if (second === Number.MIN_SAFE_INTEGER)
    {
        console.log("khong tim duoc");
        return -1;
    }
    return second;
}

function main()
{
    readline.question((length) => 
    {
        length = parseInt(length); // chuyen thanh int
        let arr = []; // tao mang trong
        const getArrayInput = (i) => 
        {
            if(i < length)
            {
                readline.question(`${i + 1}: `, (num) =>
                {
                    arr.push(parseInt(num));
                    getArrayInput(i + 1);
                });
            }
            else
            {
                const result = solution(arr, length);
                if(result !== -1)
                {
                    console.log(result);
                }
                readline.close();
            }
        };
        getArrayInput(0);
    });
}
main();
