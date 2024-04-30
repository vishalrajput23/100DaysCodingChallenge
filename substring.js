// const prompt = require("prompt-sync")();               //Prints substrings of a string
// let str = prompt("Enter the string: ");

let str = "abcd";
console.log("The substrings are:");
for (let i = 0; i < str.length; i++)
{
    for (let j = i + 1; j <= str.length; j++)
    {
        console.log(str.substring(i, j));
    }
}