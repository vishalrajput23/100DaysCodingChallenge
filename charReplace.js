const prompt = require("prompt-sync")();             
let str = prompt("Enter the string: ");
let ch = prompt("Enter the character to be replaced: ");
let ch1 = prompt("Enter the character to be replaced with: ");

str1 = str.replace(ch, ch1);
console.log(`The new string is ${str1}`);