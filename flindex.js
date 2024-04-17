// const prompt = require("prompt-sync")();          //First and last index of element in array (Sorted Array)
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

let arr = [10, 20, 30, 30, 30, 40, 40]; y = 20;
let count = 0;

let fi = -1; li = -1;

let l = 0; h = arr.length - 1;                            //For finding first index  
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
        fi = m;
        h = m - 1;
        count++;
    }
}

l = 0; h = arr.length - 1;                                //For finding last index
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
        li = m;
        l = m + 1;
        count++;
    }
}

if (count == 0)
{
    console.log("The element is not inside array");
}
else
{
    console.log("The first index of element is:", fi);
    console.log("The last index of element is:", li);
}

