// const prompt = require("prompt-sync")();    //Prints floor and ceil of a number present in sorted array
// let x = parseInt(prompt("Enter no. of elements of array: "));

// function arrInp(a)
// {
//     console.log("Enter the elements:");
//     let arr1 = [];
//     for (let i = 0; i < a; i++)                        //For taking input of array
//     {  
//         arr1[i] = parseInt(prompt());
//     }
//     return arr1;
// }
// let arr = arrInp(x);
// let y = parseInt(prompt("Enter the number: "));

let arr = [10, 20, 30, 40, 50]; y = 36;
let count = 0; floor = 0; ceil = 0;

let l = 0; h = arr.length - 1;
while (l <= h)
{
    let m = Math.floor((l + h) / 2);
    if (y > arr[m])
    {
        l = m + 1;
        floor = arr[m];
    }
    else if (y < arr[m])
    {
        h = m - 1;
        ceil = arr[m];
    }
    else
    {
        floor = arr[m];
        ceil = arr[m];
        break;
    }
}
console.log("The floor of number is:", floor);
console.log("The ceil of number is:", ceil);
