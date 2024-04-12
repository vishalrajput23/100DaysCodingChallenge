// const prompt = require("prompt-sync")();                      //Prints sum of elements of two arrays
// let x = parseInt(prompt("Enter no. of elements of first array: "));

// function arrInp(a)
// {
//     console.log("Enter the elements:");
//     let arr = [];
//     for (let i = 0; i < a; i++)                               //For taking input of array
//     {  
//         arr[i] = parseInt(prompt());
//     }
//     return arr;
// }
// let arr1 = arrInp(x);
// let y = parseInt(prompt("Enter no. of elements of second array: "));
// let arr2 = arrInp(y);

let arr1 = [4, 3, 5, 1, 2];
let arr2 = [9, 8, 6, 7];

let sum = []; str = "";

let c = 0;                                                      //Carry
let i = arr1.length - 1;
let j = arr2.length - 1;
let max = i;
if (i > j)
{
    max = i;
}
else
{
    max = j;
}

while (max >= 0)
{
    let d = c;                                                   //Digit
    if (i >= 0)
    {
        d += arr1[i];
    }
    if (j >= 0)
    {
        d += arr2[j];
    }
    c = Math.floor(d / 10);
    d = d % 10;
    sum.unshift(d);
    i--;
    j--;
    max--;
}
for (k = 0; k < sum.length; k++)
{
    str += sum[k];
}
if (c != 0)
{
    str = c + str;
}
console.log(`The sum of array elements is ${str}.`);
// console.log(sum);