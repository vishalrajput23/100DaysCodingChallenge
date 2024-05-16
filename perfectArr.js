                                                                 
let arr = [1, 2, 3, 2, 1]                        //Prints whether array is PERFECT(reverse of arr == arr)
let i = 0;
let j = arr.length - 1;
while (i < j)
{
    if (arr[i] !== arr[j])
    {
        console.log("NOT PERFECT");
        break;
    }
    else
    {
        i++;
        j--;
    }
}
console.log("PERFECT");