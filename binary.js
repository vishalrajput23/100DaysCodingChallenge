const prompt = require("prompt-sync")();                      //Converts decimal to any base
let x = parseInt(prompt("Enter the decimal number: "));
let y = parseInt(prompt("Enter the required base: "));

function dtb(a, b)
{
    let z = 0;
    let p = 1;
    for (let i = a; i > 0; i = Math.floor(i / b))
    {
        let dig = i % b;
        z += dig * p;
        p = p * 10; 
    }
    return z;
}
console.log("The required number is:", dtb(x,y));