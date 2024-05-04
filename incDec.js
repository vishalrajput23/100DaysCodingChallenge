const prompt = require("prompt-sync")();                  //Prints increasing & decreasing numbers (Recursion)
let x = parseInt(prompt("Enter the number: "));

let y = 1;
function incDec(m, n)
{
    if (m > n)
    {
        return;
    }
    else
    {
        console.log(m);
        incDec(m + 1, n);
        console.log(m);
    }
}
incDec(y, x);