
let arr = [111, 222, 333, 444, 555];                            //Prints if array has palindrome elements
function palinArray(a)
{
     const findPalindrome = (num) => {
     let revNumber = 0;
     let remainder = 0;
     while(num > 0)
     {
          remainder = num % 10;
          revNumber = parseInt((revNumber*10) + remainder);
          num = parseInt(num/10);
     }
     return revNumber;
     }
     for(let i = 0; i < arr.length; i++)
     {
         if(arr[i]!==findPalindrome(arr[i]))
         {
             return 0;
         }
     }
     return 1;
}
console.log(palinArray(arr));