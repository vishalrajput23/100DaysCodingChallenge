// const prompt = require("prompt-sync")();               //Prints subsets on an array
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

let arr = [1, 2, 3];
let limit = Math.pow(2, arr.length);                      //No. of subsets in an array

console.log("The Subsets of array are:");
for (let i = 0; i < limit; i++)
{
    let str = "";
    let temp = i;
    for (let j = arr.length - 1; j >= 0; j--)
    {
        let r = temp % 2;
        temp = Math.floor(temp / 2);
        if (r == 0)
        {
            str = "- " + str;
        }
        else
        {
            str = arr[j] + " " + str;
        }
    }   
    console.log(str);
}
