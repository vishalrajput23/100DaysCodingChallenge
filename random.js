const prompt = require("prompt-sync")();                     
let x = parseInt(prompt("Enter lower number: "));
let y = parseInt(prompt("Enter higher number: "));

let z = Math.floor(Math.random() * (y - x + 1)) + x;
console.log(`Random value between ${x} and ${y} is ${z}`);
