const prompt = require("prompt-sync")();                          //Prints prime factors of a number.
let x = parseInt(prompt("Enter the number: "));

console.log("The prime factors are:")
for (let i = 2; i <= x; i++) 
{
    while (x % i == 0)
    {
        x = Math.floor(x / i);
        console.log(i);
    }
}