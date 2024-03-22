const prompt = require("prompt-sync")();                        //Prints sum of n natural numbers (Recursion)
let x = parseInt(prompt("How many n natural numbers?: "));

function sum(n)
{
    if (n == 0)
    {
        return n;
    }
    else
    {
        return n + sum(n - 1);
    }
    
}
console.log(`The sum of first ${x} natural numbers is ${sum(x)}`);