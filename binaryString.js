                                                                      
let str = "111";                                             //Prints whether string is binary
let count = 0;
for (let i = 0; i < str.length; i++)
{
    if (str.charAt(i) !== "0" && str.charAt(i) !== "1")
    {
       count++;
    }
}
if (count > 0)
    {
        console.log(`String is not binary.`);
    }
else
{
    console.log(`String is binary.`);
}

