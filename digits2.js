const prompt = require("prompt-sync")();                       //Print digits of a number in reverse order
let x = parseInt(prompt("Enter the number: "));

for (let i = x; i > 0; i = Math.floor(i / 10))
{
    let r = i % 10;
    console.log(r);
}
