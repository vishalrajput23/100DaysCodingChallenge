const prompt = require("prompt-sync")();                      //Converts any base to any base
let x = parseInt(prompt("Enter the number: "));
let y = parseInt(prompt("Enter it's base: "));
let b = parseInt(prompt("Enter required base: "));

function btd(a, c)
{
    let z = 0;
    let p = 1;
    for (let i = a; i > 0; i = Math.floor(i / 10))
    {
        let dig = i % 10;
        z += dig * p;
        p = p * c; 
    }
    return z;
}
dec = btd(x,y);

function dtb(a, c)
{
    let w = 0;
    let p = 1;
    for (let i = a; i > 0; i = Math.floor(i / c))
    {
        let dig = i % c;
        w += dig * p;
        p = p * 10; 
    }
    return w;
}
console.log("The required number is:", dtb(dec,b));