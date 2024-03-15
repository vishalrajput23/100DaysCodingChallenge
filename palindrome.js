const prompt = require("prompt-sync")();             
let str = prompt("Enter the string: ");

function palindrome(s)
{
    let i = 0;
    let j = s.length - 1;
    while (i <= j)
    {
        ch1 = s.charAt(i);
        ch2 = s.charAt(j);
        if (ch1 != ch2)
        {
            return false;
        }
        else
        {
            i++;
            j--;
        }
    }
    return true;
}

if (palindrome(str) == true)
{
    console.log(`This is a palindrome string`);
}
else
{
    console.log(`This is not a palindrome string`);
}