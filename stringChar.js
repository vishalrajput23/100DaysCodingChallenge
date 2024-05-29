                                                                      
let str = "gggg";                                           //Checks if all characters of string are same
let count = 0;
for (let i = 0; i < str.length; i++) 
{
    if (str[i] !== str[0])
    {
        count++;
    }
}
if (count > 0)
{
    console.log(`Characters in string are different.`);
}
else
{
    console.log(`All characters in string are same.`);
}