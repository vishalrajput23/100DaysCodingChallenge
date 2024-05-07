
// let obj1 = {
//     first_name: "Vishal",
//     age: 29,
//     last_name: "Rajput",
//     full_name: function () {
//         return this.first_name + " " + this.last_name;
//     }
// };
// console.log(obj1.full_name());

// let obj1 = {
//     "A" : 23,
//     "B" : 46,
//     "C" : 56,
// }
// let y = 89;
// let x = Object.keys(obj1);

let arr = [15, 1, 45, 12, 7]
let x=[];
for (let i = 0;i<arr.length;i++)
{
    if(arr[i] == i)
    {
        x.push(arr[i]);
    }
}
console.log(x);