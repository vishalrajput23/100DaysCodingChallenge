// const prompt = require("prompt-sync")();               //Prints reverse of an array
// let x = parseInt(prompt("Enter no. of elements of first array: "));

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

let arr = [1, 2, 3, 4, 5];   
let i = 0;
let j = arr.length - 1;
console.log("The original array is:", arr, "\n");

while (i < j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log("The reversed array is:", arr);