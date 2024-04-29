// const prompt = require("prompt-sync")();                         //Prints compressed string
// let str = prompt("Enter the string: ");

let str = "aaabbcccddaeeff";
function compress1(s)
{
    let strn = s.charAt(0);
    for (let i = 1; i < s.length; i++)
    {
        if (s.charAt(i) != s.charAt(i - 1))
        {
            strn += s.charAt(i);
        }
    }
    return strn;
}

function compress2(s)
{
    let strn = s.charAt(0);
    let count = 1;
    for (let i = 1; i < s.length; i++)
    {
        if (s.charAt(i) == s.charAt(i - 1))
        {
            count++;
        }
        else
        {
            if (count > 1)
            {
                strn += count;
                count = 1;
            }
            strn += s.charAt(i)
        }
    }
    if (count > 1)
        {
            strn += count;
        }
    return strn;
}
console.log("Compressed string is:", compress1(str));
console.log("Compressed string is:", compress2(str));