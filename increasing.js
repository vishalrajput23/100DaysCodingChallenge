const prompt = require("prompt-sync")();                        //Prints increasing numbers (Recursion)
let x = parseInt(prompt("Enter the number: "));

function inc(n)
{
    if (n == 0)
    {
        return;
    }
    else
    {
        inc(n - 1);
        console.log(n);
    }
}
inc(x);