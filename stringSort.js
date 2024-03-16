const prompt = require("prompt-sync")();             
let str = prompt("Enter the string: ");

res = str.split("").sort().join("");
console.log(`Sorted string is ${res}`);