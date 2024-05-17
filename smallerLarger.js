                                                                     
let arr = [1, 2, 8, 10, 11, 12, 19], x = 5                   //Prints no. of elements <= and >= from a value
let a = 0, b = 0;
for(let i = 0; i < arr.length; i++)
{
    if(arr[i] <= x)
    {
        a++;
    }
    if(arr[i] >= x)
    {
        b++;
    }
}
console.log(`No. of elements less than '${x}' are ${a}`);
console.log(`No. of elements greater than '${x}' are ${b}`);