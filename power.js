const prompt = require("prompt-sync")();                          //Prints power of a number.
let x = parseInt(prompt("Enter the number: "));
let y = parseInt(prompt("Enter the power: "));

let result = 1;
for (let i = 1; i <= y; i++)
{
    result *= x;
}

console.log("The result is:", result);