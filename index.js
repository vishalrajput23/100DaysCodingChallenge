// const prompt = require("prompt-sync")();                      //Prints index of an element of array
// let x = parseInt(prompt("Enter number of elements: "));

// let arr = [];
// for (let i = 0; i < x; i++)                                   //For taking input of array
// {  
//     arr[i] = parseInt(prompt());
// }
// let y = parseInt(prompt("Enter the element whose index is to be find: "));

let arr = [5, 20, 25, 15, 10];
let y = 15;
let index = -1;
for (let i = 0; i < arr.length; i++)
{
    if (y == arr[i])
    {
        index = i;
        break;
    }
}
if (index > -1)
{
    console.log(`The index of ${y} is ${index}`);
}
else
{
    console.log(`The index of ${y} is -1`);
}

