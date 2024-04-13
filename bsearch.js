// const prompt = require("prompt-sync")();    //Binary search  (Array should be sorted with distint elements)
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
// let y = parseInt(prompt("Enter the element to be searched: "));

let arr = [10, 20, 30, 40]; y = 40;
let count = 0;

let l = 0; h = arr.length - 1;
while (l <= h)
{
    let m = Math.floor((l + h) / 2);
    if (y > arr[m])
    {
        l = m + 1;
    }
    else if (y < arr[m])
    {
        h = m - 1;
    }
    else
    {
        console.log("The element is at index:", m);
        count++;
        break;
    }
}
if (count == 0)
{
    console.log("The element is not inside array");
}

