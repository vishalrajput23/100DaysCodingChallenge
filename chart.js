// const prompt = require("prompt-sync")();                      //Prints chart representation of array elements
// let x = parseInt(prompt("Enter number of elements: "));

// function arrInp(a)
// {
//     let arr1 = [];
//     console.log("Enter the elements:");
//     for (let i = 0; i < a; i++)                               //For taking input of array
//     {  
//         arr1[i] = parseInt(prompt());
//     }
//     return arr1;
// }
// let arr = arrInp(x);
// console.log("\n");

let arr = [4, 3, 5, 1, 2];
let max = arr[0]; str ="";
for (let i = 1; i < arr.length; i++)
{
    if (arr[i] > max)
    {
        max = arr[i];
    }
}

for (let i = max; i >= 1; i--)
{
    for (let j = 0; j < arr.length; j++)
    {
        if (arr[j] >= i)
        {
            str += "*";
        }
        else
        {
            str += " ";
        }
    }
    str += "\n";
}
console.log(str);

