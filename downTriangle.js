                                                                      
let str = "Geeks";                                      //Prints triangle shinking downwards
let res = "";
for (let i = 0; i < str.length; i++)
{
    let dot = i;
    while (dot > 0)
    {
        res += '.';
        dot--;
    }
    for(let j = i; j < str.length; j++)
    {
        res += str[j];
    }
    res += '\n';
}
console.log(res);