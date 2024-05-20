                                                                    
let arr = [10, 11, 2, 19, 12, 8];                  //Prints all elements except two greatest elements
let n = arr.length;
const sortedArr = arr.sort((a, b) => a-b);
const result = [];
for(let i = 0; i < n - 2; i++) 
{
    result.push(sortedArr[i]);
}
console.log(result);