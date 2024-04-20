// const prompt = require("prompt-sync")();               //Prints subarrays of an array
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

let arr = [1, 2, 3, 4];
let str = "";
function subarr(arr1)
{
    for (let i = 0; i < arr1.length; i++)
    {
       for(let j = i; j < arr1.length; j++)
       {
        for (let k = i; k <= j; k++)
        {
            str += arr1[k];
        }
        str += "\n";
       }
    }
    return str;
}
console.log("The subarrays of array are:");
console.log(subarr(arr));