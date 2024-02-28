let x = 10                                                  //Lower number
let y = 30;                                                 //Higher number

console.log(`The prime numbers are:`);
for (let i = x; i <= y; i++)                                //Prints prime numbers within specified range
{
    let count = 0;
    for (let j = 1; j <= i; j++)        
    {
        if (i % j == 0)
        {
            count++;
        }
    }
    if (count == 2)
    {
        console.log(i);
    }
}