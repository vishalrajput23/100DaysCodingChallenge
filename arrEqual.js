                                                                      
let a = [1,2,5,4,0];                             //Finds if two arrays of equal length are identical
let b = [2,4,5,0,1];
let count = 0;
let aS = a.sort((a, b) => a - b);
let bS = b.sort((a, b) => a - b);
for(let i = 0; i < a.length; i++)
{
    if(aS[i] !== bS[i])
    {
        count++;
    }
}
if (count > 0)
{
    console.log("Arrays are not identical");
}
else
{
    console.log("Arrays are identical");
}