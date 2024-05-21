                                                       
let arr = [7, 8, 3, 4, 2, 9, 5];                              //Prints the left element
let n = arr.length;
arr.sort((a, b) => a - b)
if(arr.length % 2 === 0) 
{
    console.log(arr[Math.floor((n / 2) - 1)]);
} 
else 
{
    console.log(arr[Math.floor((n - 1) / 2)]);
}
