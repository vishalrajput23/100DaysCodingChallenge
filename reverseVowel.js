                                                                      
let str = "practice";                                          //Reverses the vowels in string
let arr = str.split("");
       
let i = 0;
let j = arr.length - 1;
let temp = 0;
let vowel = 'aeiou';
while(i < j) 
{
    if(vowel.includes(arr[i]) && vowel.includes(arr[j])) 
    {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
 
    if(!vowel.includes(arr[i])) 
    i++;
    if(!vowel.includes(arr[j])) 
    j--;
}
console.log(arr.join(''));

