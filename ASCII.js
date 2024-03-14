const prompt = require("prompt-sync")();             
let str = prompt("Enter the Character: ");

let code = str.charCodeAt();
console.log(`The ASCII value is: ${code}`);