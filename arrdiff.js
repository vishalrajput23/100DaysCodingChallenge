// const prompt = require("prompt-sync")();               //Prints difference of elements of two arrays
// let x = parseInt(prompt("Enter no. of elements of first array: "));

// function arrInp(a)
// {
//     console.log("Enter the elements:");
//     let arr = [];
//     for (let i = 0; i < a; i++)                        //For taking input of array
//     {  
//         arr[i] = parseInt(prompt());
//     }
//     return arr;
// }
// let arr1 = arrInp(x);
// let y = parseInt(prompt("Enter no. of elements of second array: "));
// let arr2 = arrInp(y);

let arr1 = [9, 9, 9];                               
let arr2 = [1, 0, 0, 0];                               //Second array should be greater

let diff = []; str = "";

let c = 0;                                                //Carry
let i = arr1.length - 1;
let j = arr2.length - 1;

while (j >= 0)
{
    let d = 0;                                            //Digit
    let arr1v = i >= 0 ? arr1[i] : 0;                                             
    if (arr2[j] + c >= arr1v)
    {
        d = arr2[j] + c - arr1v;
        c = 0;
    }
    else
    {
        d = arr2[j] + c + 10 - arr1v;
        c = -1;
    }
    diff.unshift(d);
    i--;
    j--;
}

let k = 0;
while (k < diff.length)
{
    if (diff[k] == 0)
    {
        k++;
    }
    else
    {
        break;
    }
   
}

while (k < diff.length)
{
    str += diff[k];
    k++;
}
console.log(`The difference of array elements is ${str}.`);