const prompt = require("prompt-sync")();                    
let a = parseInt(prompt("Enter the first number: "));
let b = parseInt(prompt("Enter the second number: "));

let c = a % 10;
let d = b % 10;
if (c == d)
{
    console.log("Numbers have same last digit");
}
else
{
    console.log("Numbers do not have same last digit");
}
