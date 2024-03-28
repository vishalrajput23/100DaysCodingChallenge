const prompt = require("prompt-sync")();                             // Prints digits of a number
let x = parseInt(prompt("Enter the number: "));
let dig = 0;

for (let i = x; i > 0; i = Math.floor(i/10))
{   
    dig++;
}

let div = Math.pow(10, dig - 1);
for (let j = div; j > 0; j = Math.floor(j / 10))
{
    let q = Math.floor(x / j);
    console.log(q);
    x = x % j;
}

// for (let j = dig; j > 0; j--)
// {
//     let m = (x / Math.floor(Math.pow(10, j - 1) % 10));
//     console.log(m);
// }