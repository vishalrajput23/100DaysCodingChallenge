const prompt = require("prompt-sync")();             
let str = prompt("Enter the string: ");

let res = str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log(`Uppercase converted string is: ${res}`);