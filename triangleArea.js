let a = 3; b = 4; c = 5;
let area;

if ((a + b) > c && (b + c) > a && (c + a) > b)
{
    let s = (a + b + c) / 2;
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(`Area of triangle is ${area}.`);
}
else
{
    console.log(`The given sides can not form a triangle.`);
}