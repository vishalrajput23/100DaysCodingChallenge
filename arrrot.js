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
// let y = parseInt(prompt("Enter how times array to be rotated: "));

let arr = [1, 2, 3, 4, 5]; y = 3;
console.log("The original array is:", arr, "\n");
function reverse(arr, i, j)
{
    while (i < j)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

function rotate(arr, k)
{
    k = k % arr.length;
    if (k < 0)
    {
        k = k + arr.length;
    }
    reverse(arr, 0, arr.length - k - 1 );                 //For reversing first part
    reverse(arr, arr.length - k, arr.length - 1);         //For reversing second part
    reverse(arr, 0, arr.length - 1 );                     //For reversing whole array
    return arr;
}
console.log("The rotated array is:", rotate(arr, y));