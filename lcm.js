const prompt = require("prompt-sync")();                //Prints GCD an LCM of two numbers
let x = parseInt(prompt("Enter first number: "));
let y = parseInt(prompt("Enter second number: "));

let x1 = x;                                            //Fixing original value of first number
let y1 = y;                                            //Fixing original value of second number

while (x % y != 0)
{
    let r = x % y;
    x = y;
    y = r;
}

let gcd = y;
let lcm = (x1 * y1) / gcd;                              //Number1 * Number2 = GCD * LCM

console.log("GCD:", gcd);
console.log("LCM:", lcm);
