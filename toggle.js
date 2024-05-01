// const prompt = require("prompt-sync")();                       //Toggles characters of a string
// let str = prompt("Enter the string: ");

let str = "AbCdEf"; 
let str1 = "";
console.log("The original string is:", str);
for (let i = 0; i < str.length; i++)
{
    let ch = str.charAt(i);
    if (ch >= "a" && ch <= "z")
    {
        let uval = "A".charCodeAt() + ch.charCodeAt() - "a".charCodeAt();
        let uch = String.fromCharCode(uval);
        str1 += uch;
    }
    else if (ch >= "A" && ch <= "Z")
    {
        let lval = "a".charCodeAt() + ch.charCodeAt() - "A".charCodeAt();
        let lch = String.fromCharCode(lval);
        str1 += lch;
    }
}
console.log("The toggled string is:", str1);