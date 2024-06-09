                                                                      
let arr = [1,2,3,4];                                   //Finds if element is present in array
let x = 1; count = 0;
for (let i = 0; i < arr.length; i++)
{
    if (arr[i] === x)
    {
        console.log(`${x} is present at index ${i}`);
        count++;
    }
}
if (count == 0)
{
    console.log(`${x} is not present in array`);
}