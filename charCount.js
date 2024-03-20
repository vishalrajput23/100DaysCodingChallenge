const prompt = require("prompt-sync")();             
let str = prompt("Enter the string: ");
let ch = prompt("Enter the character: ");

let count = 0;
for (let i = 0; i < str.length; i++)
{
    if (str[i] == ch)
    {
        count++;
    }
}
console.log(`The character ${ch} appears ${count} times in the string`)