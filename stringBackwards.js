                                                                      
let str = "Hello";              //Replaces alphabet with alphabet occuring at same position from backwards

let capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let res = "";
for (let i = 0; i < str.length; i++)
{
    if (str[i] !== " ")
    {
        for (let j = 0; j < capitalLetters.length; j++)
        {
            if (str[i] === capitalLetters[j])
            {
                res += capitalLetters[capitalLetters.length-1-j];
            }
        }
        for (let j = 0; j<lowercaseLetters.length; j++)
        {
            if (str[i] === lowercaseLetters[j])
            {
                res += lowercaseLetters[lowercaseLetters.length-1-j];
            }
        }
    }
    else
    {
        res += " ";
    }
}
console.log(res);