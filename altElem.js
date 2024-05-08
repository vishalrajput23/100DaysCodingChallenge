
let arr = [15, 1, 45, 12, 7];                        //Prints alternate elements of an array
let str = "";
for (let i = 0; i < arr.length; i += 2)
{
     str += arr[i] + " ";
}
console.log(str);