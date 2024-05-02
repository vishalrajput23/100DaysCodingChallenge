const prompt = require("prompt-sync")();                 //Prints decreasing & increasing numbers (Recursion)
let x = parseInt(prompt("Enter the number: "));

function decInc(n)
{
    if (n == 0)
    {
        return;
    }
    else
    {
        console.log(n);
        decInc(n - 1);
        console.log(n);
    }
}
decInc(x);