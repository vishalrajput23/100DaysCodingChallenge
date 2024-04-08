// const prompt = require("prompt-sync")();               //Prints inverse of an array
// let x = parseInt(prompt("Enter no. of elements of array: "));
//                                     //Array elements should be distinct and less than array length in value
//                                     //e.g. if array length is 6 elements should be like [5, 1, 3, 2, 4, 0]
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

let arr = [3, 4, 1, 2, 0]; 
function inverse(arr1)
{
    let inv = [];
    for (let i = 0; i < arr1.length; i++)
    {
        let v = arr1[i];
        inv[v] = i;
    }
    return inv;
}
console.log("The inverse of array is:", inverse(arr));