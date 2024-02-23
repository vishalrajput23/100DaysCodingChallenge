let x = 12;                                                 //Prints whether a number is prime or not.

if (x <= 1)
{
    console.log("Number should be greater than 1");
}
else
{
    let count = 0;
    for (let i = 1; i <= x; i++)
    {
        if (x % i == 0)
        {
            count++;
        } 
    }
    if (count == 2)
    {
        console.log(`${x} is a prime number`);
    }
    else
    {
        console.log(`${x} is not a prime number`);
    }
}    

// else                                                    // More optimized method
// {
//     let count = 0;
//     for (let i = 2; i <= Math.sqrt(x); i++)
//     {
//         if (x % i == 0)
//         {
//             count++;
//             break;
//         } 
//     }
//     if (count == 0)
//     {
//         console.log(`${x} is a prime number`);
//     }
//     else
//     {
//         console.log(`${x} is not a prime number`);
//     }
// }    