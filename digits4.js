const prompt = require("prompt-sync")();                    //Prints sum and product of digits of a number
let x = parseInt(prompt("Enter the number: "));
let sum = 0;
let product = 1;

for (let i = x; i > 0; i = Math.floor(i / 10))
{
    let r = i % 10;
    sum += r;
    product *= r;
}

console.log("The sum of digits is:", sum);
console.log("The product of digits is:", product);