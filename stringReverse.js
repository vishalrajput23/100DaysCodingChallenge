const prompt = require("prompt-sync")();             
let str = prompt("Enter the string: ");

res = str.split("").reverse().join("");
console.log(`The reverse of string is ${res}`);