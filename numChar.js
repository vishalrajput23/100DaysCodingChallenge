                                                                      
let str = "AA1d23cBB4";                                    //Removes all characters except numeric
let newStr = "";
for (let i = 0; i < str.length; i++)
{
    if (str[i] >= 0 && str[i] <= 9)
    {
        newStr += str[i];
    }
}
console.log(newStr);