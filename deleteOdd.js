                                                                      
let str = "Geeks";                                           //Delete characters at odd indices
let newStr = "";
for (let i = 0; i < str.length; i += 2)
{
    newStr += str[i];
}
console.log(newStr);