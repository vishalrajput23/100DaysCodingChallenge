const prompt = require("prompt-sync")();                        //
let o = prompt("Enter the operator (either +, -, *, /): ");
let x = parseInt(prompt("Enter first number: "));
let y = parseInt(prompt("Enter second number: "));
let result;

switch(o)
{
    case "+":
        result = x + y;
        console.log(`${x} ${o} ${y} = ${result}`);
        break;
        
    case "-":
        result = x - y;
        console.log(`${x} ${o} ${y} = ${result}`);
        break;

    case "*":
        result = x * y;
        console.log(`${x} ${o} ${y} = ${result}`);

    case "/":
        result = x / y;
        console.log(`${x} ${o} ${y} = ${result}`);
}

