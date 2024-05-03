const prompt = require("prompt-sync")();                        //Prints decreasing numbers (Recursion)
let x = parseInt(prompt("Enter the number: "));

function dec(n)
{
    if (n == 0)
    {
        return;
    }
    else
    {
        console.log(n);
        dec(n - 1);
    }
}
dec(x);