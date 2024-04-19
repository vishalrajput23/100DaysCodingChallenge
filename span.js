// const prompt = require("prompt-sync")();                      //Prints span of an array
// let x = parseInt(prompt("Enter number of elements: "));

// let arr = [];
// for (let i = 0; i < x; i++)                                   //For taking input of array
// {  
//     arr[i] = parseInt(prompt());
// }

let arr = [5, 20, 25, 15, 10];
let max = arr[0]; min = arr[0];
for (let i = 1; i < arr.length; i++)
{
    if (arr[i] > max)
    {
        max = arr[i];
    }
    if (arr[i] < min)
    {
        min = arr[i];
    }
}
let span = max - min;
console.log(`The Span of array is ${span}`);