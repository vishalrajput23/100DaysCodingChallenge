const prompt = require("prompt-sync")();       //Prints whether sides of a triangle follow Pythagoras Theorem.
let x = parseInt(prompt("Enter first side of triangle: "));
let y = parseInt(prompt("Enter second side of triangle: "));
let z = parseInt(prompt("Enter third side of triangle: "));

let max = x;
if (y >= max)
{
    max = y;
}
if (z >= max)
{
    max = z;
}

if (max == x)
{
    if ((y * y + z * z) == (x * x))
    {
        console.log("The sides follow Pythagoras Theorem and form a right angled triangle.")
    }
    else
    {
        console.log("The sides do not follow Pythagoras Theorem and do not form a right angled triangle.")
    }
}

if (max == y)
{
    if ((x * x + z * z) == (y * y))
    {
        console.log("The sides follow Pythagoras Theorem and form a right angled triangle.")
    }
    else
    {
        console.log("The sides do not follow Pythagoras Theorem and do not form a right angled triangle.")
    }
}

if (max == z)
{
    if ((x * x + y * y) == (z * z))
    {
        console.log("The sides follow Pythagoras Theorem and form a right angled triangle.")
    }
    else
    {
        console.log("The sides do not follow Pythagoras Theorem and do not form a right angled triangle.")
    }
}