
let arr = [1, 2, 3, 4, 5], k = 2;                       //Swap kth elements from beginning and end of an array
let n = arr.length;
let temp = arr[k - 1];
arr[k - 1] = arr[(n - 1) - (k - 1)];
arr[(n - 1) - (k - 1)] = temp;
console.log(arr);