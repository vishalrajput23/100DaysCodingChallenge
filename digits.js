const prompt = require("prompt-sync")();                    // Prints no. of digits in a number
let x = parseInt(prompt("Enter the number: "));
let dig = 0;

for (let i = x; i > 0; i = Math.floor(i/10))
{   
    dig++;
}

// while (x > 0)
// {
//     x = Math.floor(x / 10);
//     dig++;
// }

console.log(x, "has", dig, "digits");
