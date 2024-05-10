
let arr = [1, 2, 4, 5, 8, 10], x = 9                        //Prints no. of smaller elements
let count = 0;
for (let i = 0; i < arr.length; i++)
{
    if (arr[i] <= x)
    {
        count++;
    }
}
console.log(`No. of elements smaller than '${x}' are ${count}`);