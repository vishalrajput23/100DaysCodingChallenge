let x = 49;
function squareRoot(num)
{
    let result = x / 2;
    let k;
    do 
    {
        k = result;
        result = (k + (x / k)) / 2;
    }
    while ((k - result)!= 0);
    {
        return result;
    }
}

if (x > 0)
{
    console.log(`Square root of ${x} is ${squareRoot(x)}`)
}
else
{
    console.log(`Enter valid number!!`);
}
