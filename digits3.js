const prompt = require("prompt-sync")();         //Prints sum and product of first and last digits of a number
let x = parseInt(prompt("Enter the number: "));
let sum = 0;
let product = 1;
let l = x % 10;                                  // For finding last digit

while (x >= 10)                                  // For finding first digit
{
    x = Math.floor(x / 10);
}

sum = x + l;
product = x * l;

console.log("The sum of first and last digits is:", sum);
console.log("The product of first and last digits is:", product);


