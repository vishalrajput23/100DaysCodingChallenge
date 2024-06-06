                                                                      
let str = "geeks01for02geeks03!!!";                              //Splits string
let s1 = "";
let s2 = "";
let s3 = "";
for (let i = 0; i < str.length; i++)
{
    let ch = str.charAt(i);
    if(ch >= 'A' && ch <= 'Z' || ch >= 'a' && ch <= 'z')
    {
        s1+=ch;
    }
    else if(ch >= '0' && ch <= '9')
    {
        s2+=ch;
    }
    else
    {
        s3+=ch;
    }
    
}
console.log(s1);
console.log(s2);
console.log(s3);