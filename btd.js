const prompt = require("prompt-sync")();                      //Converts any base to decimal
let x = parseInt(prompt("Enter the number: "));
let y = parseInt(prompt("Enter it's base: "));

function btd(a, b)
{
    let z = 0;
    let p = 1;
    for (let i = a; i > 0; i = Math.floor(i / 10))
    {
        let dig = i % 10;
        z += dig * p;
        p = p * b; 
    }
    return z;
}
console.log("The required decimal number is:", btd(x,y));
