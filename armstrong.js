const prompt = require("prompt-sync")();                       
let x = prompt("Enter the number: ");
let length = x.length;

let sum = 0;
let temp = x;
while (temp > 0)
{
    let r = temp % 10;
    sum += r ** length;
    temp = Math.floor(temp / 10);
}

if (sum == x)
{
    console.log(`${x} is an Armstrong number.`)
}
else
{
    console.log(`${x} is not an Armstrong number.`)
}