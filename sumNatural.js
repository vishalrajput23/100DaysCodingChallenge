const prompt = require("prompt-sync")();                    //Prints sum of first "n" natural numbers
let n = parseInt(prompt("How many natural numbers? "));

let sum = 0;
for (let i = 1; i <= n; i++)
{
    sum += i;
}
console.log(`The sum of first ${n} natural numbers is: ${sum}`);