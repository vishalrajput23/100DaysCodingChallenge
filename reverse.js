const prompt = require("prompt-sync")();                //Prints reverse of a number
let x = parseInt(prompt("Enter the number: "));
let rev = 0;
let str = "";

for (let i = x; i > 0; i = Math.floor(i / 10))
{
    rev = (rev * 10) + (i % 10);
}
console.log("The reverse of number is:", rev);


// for (let i = x; i > 0; i = Math.floor(i/10))
// {
//     r = i % 10;
//     str += r;
// }
// console.log("The reverse of number is:", str);

    
   


