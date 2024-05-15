                                                                        
let arr = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]       //Displays longest name
let max = arr[0];                       
for (let i = 0; i < arr.length; i++)
{
    if (arr[i].length > max.length)
    {
        max = arr[i];
    }
}
console.log(max)