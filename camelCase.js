                                                                      
let str = "ckjkUUYII";                                        //Counts no. of Camelcase characters
let count = 0; 
for (let i = 0; i < str.length; i++)
{
    if ((str.charCodeAt(i)) >= 65 && (str.charCodeAt(i) <= 90))
    {
        count++;
    }
}
console.log(count);