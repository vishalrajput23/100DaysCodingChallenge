const prompt = require("prompt-sync")();                      //Prints frequency of a digit in number
let x = parseInt(prompt("Enter the number: "));
let y = parseInt(prompt("Enter the digit: "));

function digf(a, b)
{
    let count = 0;
    for (let i = a; i >= 1; i = Math.floor(i / 10) )
    {   
        let dig = i % 10;
        if (dig == b)
        {
            count++;
        }
    }
    return count;
}
console.log("The frequency of", y, "in", x, "is:", digf(x, y));