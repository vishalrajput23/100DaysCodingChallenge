// const prompt = require("prompt-sync")();               //Sorting of an array
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

let arr = [3, 20, -4, 10];
console.log("The origianl array is:", arr);

function sort(arr1)
{
    for (let i = 0; i < arr1.length; i++)
    {
        for (let j = i + 1; j < arr1.length; j++)
        {
            if (arr1[i] > arr1[j])
            {
                let temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
            }
        }
    }
    return arr1;
}
console.log("The sorted array is:", sort(arr));