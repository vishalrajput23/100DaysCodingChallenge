                                                                      
let str = "#GeeKs01fOr@gEEks07";                                    //Counts type of characters
let res = [0, 0, 0, 0];
        
for (let i = 0; i < str.length; i++) 
{
    if (str[i] >= 'A' && str[i] <= 'Z') 
    {
        res[0]++;
    }
    else if (str[i] >= 'a' && str[i] <= 'z')
    {
        res[1]++;
    }
    else if (str[i] >= '0' && str[i] <= '9') 
    {
        res[2]++;
    }
    else 
    {
        res[3]++;
    }
}
console.log(`No. of uppercase characters: ${res[0]}`);
console.log(`No. of lowercase characters: ${res[1]}`);
console.log(`No. of numeric characters: ${res[2]}`);
console.log(`No. of special characters: ${res[3]}`);