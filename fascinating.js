                                                                      
let n = 192;                                             //Prints whether number is fascinating or not
let o = n * 2;
let p = n * 3;
let res = `${n}${o}${p}`;
let sorted = res.split('').sort().join('');

if (sorted === "123456789")
{
    console.log(`${n} is a fascinating number.`);
}
else
{
    console.log(`${n} is not a fascinating number.`);
}