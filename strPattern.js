                                                                      
let str = "GeeK";                                       //Prints string pattern
let res = "";
for (let i = 0; i < str.length; i++)
{
    for (let j = 0; j < str.length - i; j++)
    {
        res += str.charAt(j);
    }
    res += "\n";
}
console.log(res);