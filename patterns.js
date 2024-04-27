const prompt = require("prompt-sync")();                        
let x = parseInt(prompt("Enter number of lines: "));


// //Pattern 1                                                 //Prints below pattern
// let str = "";                                               //  *
// for (let i = 1; i <= x; i++)                                //  * *
// {                                                           //  * * *            
//     for (let j = 1; j <= i; j++)                            //  * * * *
//     {                                                       //  * * * * *
//         str += "* ";
//     }
//     str +="\n";
// }
// console.log(str);


// //Pattern 2                                                 //Prints below pattern
// let str = "";                                               //  * * * * *
// for (let i = x; i >= 1; i--)                                //  * * * * 
// {                                                           //  * * *            
//     for (let j = 1; j <= i; j++)                            //  * * 
//     {                                                       //  * 
//         str += "* ";
//     }
//     str +="\n";
// }
// console.log(str);


// //Pattern 3                                                 //Prints below pattern
// let str = 1; sp = x - 1; res = "";                          //          *
// for (let i = 1; i <= x; i++)                                //         ** 
// {                                                           //        ***            
//     for (let j = 1; j <= sp; j++)                           //       **** 
//     {                                                       //      ***** 
//         res += " ";
//     }
//     for (let k = 1; k <= str; k++)                        
//     {                                                      
//         res += "*";
//     }
//     res +="\n";
//     sp--;
//     str++;
// }
// console.log(res);


// //Pattern 4                                                 //Prints below pattern
// let str = x; sp = 0; res = "";                              //  *****
// for (let i = 1; i <= x; i++)                                //   **** 
// {                                                           //    ***            
//     for (let j = 1; j <= sp; j++)                           //     ** 
//     {                                                       //      * 
//         res += " ";
//     }
//     for (let k = 1; k <= str; k++)                        
//     {                                                      
//         res += "*";
//     }
//     res +="\n";
//     sp++;
//     str--;
// }
// console.log(res);


// //Pattern 5                                                    //Prints below pattern (Lines to be odd)
// let str = 1; sp = Math.floor(x / 2); res = "";                 //      *
// for (let i = 1; i <= x; i++)                                   //     ***
// {                                                              //    *****            
//     for (let j = 1; j <= sp; j++)                              //     *** 
//     {                                                          //      * 
//         res += " ";
//     }
//     for (let k = 1; k <= str; k++)                        
//     {                                                      
//         res += "*";
//     }
//     if (i <= Math.floor(x / 2))
//     {
//         sp--;
//         str += 2;
//     }
//     else
//     {
//         sp++;
//         str -= 2;
//     }
//     res +="\n";
// }
// console.log(res);


// //Pattern 6                                                    //Prints below pattern (Lines to be odd)
// let str = Math.floor(x / 2) + 1; sp = 1; res = "";             //   *** ***
// for (let i = 1; i <= x; i++)                                   //   **   **
// {                                                              //   *     *
//     for (let j = 1; j <= str; j++)                             //   **   **
//     {                                                          //   *** ***
//         res += "*";
//     }                                                                   
//     for (let k = 1; k <= sp; k++)                             
//     {                                                         
//         res += " ";
//     }
//     for (let j = 1; j <= str; j++)                        
//     {                                                      
//         res += "*";
//     }
//     if (i <= Math.floor(x / 2))
//     {
//         str--;
//         sp += 2;
//     }
//     else
//     {
//         str++;
//         sp -= 2;
//     }
//     res +="\n";
// }
// console.log(res);


// //Pattern 7                                                    //Prints below pattern
// let str = "";                                                  //   *
// for (let i = 1; i <= x; i++)                                   //    *
// {                                                              //     *        
//     for (let j = 1; j <= x; j++)                               //      *   
//     {                                                          //       *
//         if (j == i)
//         {
//             str += "*";
//         }             
//         else
//         {
//             str += " ";
//         }                                     
//     }                                                                   
//     str +="\n";
// }
// console.log(str);


// //Pattern 8                                                    //Prints below pattern
// let str = "";                                                  //       *
// for (let i = 1; i <= x; i++)                                   //      *
// {                                                              //     *        
//     for (let j = 1; j <= x; j++)                               //    *   
//     {                                                          //   *
//         if (i + j == x + 1)
//         {
//             str += "*";
//         }             
//         else
//         {
//             str += " ";
//         }                                     
//     }                                                                    
//     str +="\n";
// }
// console.log(str);


// //Pattern 9                                                    //Prints below pattern (Lines to be odd)
// let str = "";                                                  //     *   *
// for (let i = 1; i <= x; i++)                                   //      * *
// {                                                              //       *        
//     for (let j = 1; j <= x; j++)                               //      * * 
//     {                                                          //     *   *
//         if ((i == j) || (i + j == x + 1))
//         {
//             str += "*";
//         }             
//         else
//         {
//             str += " ";
//         }                                     
//     }                                                                    
//     str +="\n";
// }
// console.log(str);


// //Pattern 10                                                   //Prints below pattern (Lines to be odd)
// let osp = Math.floor(x / 2); isp = -1; str = "";               //       *   
// for (let i = 1; i <= x; i++)                                   //      * *
// {                                                              //     *   *          
//     for (let j = 1; j <= osp; j++)                             //      * * 
//     {                                                          //       *
//         str += " ";
//     }    
//     str += "*";       
//     for (let j = 1; j <= isp; j++)                               
//     {                                                          
//         str += " ";
//     }   
//     if (i > 1 && i < x)
//     {
//         str += "*";
//     }            
//     if (i <= Math.floor(x / 2))
//     {
//         osp--;
//         isp += 2;
//     }        
//     else
//     {
//         osp++;
//         isp -= 2;
//     }
//     str +="\n";
// }
// console.log(str);


// //Pattern 11                                                //Prints below pattern
// let count = 0; str = "";                                    //  1
// for (let i = 1; i <= x; i++)                                //  2  3
// {                                                           //  4  5  6
//     for (let j = 1; j <= i; j++)                            //  7  8  9  10            
//     {                                                       //  11 12 13 14 15
//         count ++;
//         if (count > 10)                                     //For space alignment
//         {
//             str += count + " ";                             //Single space
//         }
//         else
//         {   
//             str += count + "  ";                            //Double space
//         }                                             
//     }
//     str +="\n";
// }
// console.log(str);


// //Pattern 12                                                //Prints below pattern (Fibonacci)
// let a = 0; b = 1; str = "";                                 //  0
// for (let i = 1; i <= x; i++)                                //  1  1
// {                                                           //  2  3  5
//     for (let j = 1; j <= i; j++)                            //  8  13 21 34            
//     {                                                       //  55 89 144 233 377
//         if (a > 10)                                         //For space alignment
//         {
//             str += a + "  ";                                //Double space
//             let c = a + b;
//             a = b;
//             b = c;
//         }     
//         else if (a > 100 )                                  //Single space
//         {
//             str += a + " ";
//             let c = a + b;
//             a = b;
//             b = c;
//         }   
//         else
//         {
//             str += a + "   ";                               //Triple space
//             let c = a + b;
//             a = b;
//             b = c;
//         }                                                                                
//     }    
//     str +="\n";
// }
// console.log(str);


// //Pattern 13                                                //Prints below pattern  (Check again)
// let icj = 1; str = "";                                      //  0
// for (let i = 0; i < x; i++)                                 //  1  1
// {                                                           //  2  3  5
//     for (let j = 0; j <= i; j++)                            //  8  13 21 34            
//     {                                                       //  55 89 144 233 377
//         if (icj > 10)                                       //For space alignment
//         {
//             str += icj + " ";                               //Single space
//             let icjp = icj * Math.floor((i - j) / (j + 1));
//             icj = icjp;
//         }     
//         else
//         {
//             str += icj + "  ";                              //Double space
//             let icjp = icj * Math.floor((i - j) / (j + 1));
//             icj = icjp;
//         }                                                                                
//     }    
//     str +="\n";
// }
// console.log(str);


// //Pattern 14                                                //Prints table of a number
// let res = 1;
// for (let i = 1; i <= 10; i++)
// {
//     if (i != 10)                                            //For space alignment
//     {
//         res = x * i;
//         console.log(x, "x", i, " =", res);                  //Extra space
//     }
//     else
//     {
//         res = x * i;                   
//         console.log(x, "x", i, "=", res);                   //No space
//     }
// }


// //Pattern 15                                                   //Prints below pattern (Lines to be odd)
// let str = 1; sp = Math.floor(x / 2); val = 1; res = "";        //      1
// for (let i = 1; i <= x; i++)                                   //     232
// {                                                              //    34543            
//     for (let j = 1; j <= sp; j++)                              //     232 
//     {                                                          //      1 
//         res += " ";
//     }
//     let cval = val;
//     for (let k = 1; k <= str; k++)                        
//     {                                                      
//         res += cval;
//         if (k <= Math.floor(str / 2))
//         {
//             cval++;
//         }
//         else
//         {
//             cval--;
//         }
//     }
//     if (i <= Math.floor(x / 2))
//     {
//         sp--;
//         str += 2;
//         val++;
//     }
//     else
//     {
//         sp++;
//         str -= 2;
//         val--;
//     }
//     res +="\n";
// }
// console.log(res);


// //Pattern 16                                                   //Prints below pattern
// let str = 1; sp = 2 * x - 3; res = "";                         //   1       1
// for (let i = 1; i <= x; i++)                                   //   12     21
// {                                                              //   123   321   
//     let val = 1;                                               //   1234 4321
//     for (let j = 1; j <= str; j++)                             //   123454321 
//     {                                                                                          
//         res += val;
//         val++;
//     }                                                                   
//     for (let k = 1; k <= sp; k++)                             
//     {                                                         
//         res += " ";
//     }
//     if (i == x)
//     {
//         str--;
//         val--;
//     }
//     for (let j = 1; j <= str; j++)                        
//     {                  
//         val--;                                    
//         res += val;
//     }
//     res +="\n";
//     str++;
//     sp -= 2;
// }
// console.log(res);


// //Pattern 17                                                   //Prints below pattern (Lines to be odd)
// let str = 1; sp = Math.floor(x / 2); res = "";                 //     *    
// for (let i = 1; i <= x; i++)                                   //     **   
// {                                                              //   *****   
//     for (let j = 1; j <= sp; j++)                              //     ** 
//     {                                                          //     *
//         if ( i == Math.floor(x / 2) + 1)
//         {
//             res += "*"; 
//         }         
//         else
//         {
//             res += " ";
//         }                                                                                
//     }                                                                   
//     for (let k = 1; k <= str; k++)                             
//     {                                                         
//         res += "*";
//     }
//     if (i <= Math.floor(x / 2))
//     {
//         str++;
//     }
//     else
//     {
//         str--;
//     }
//     res +="\n";
// }
// console.log(res);


// //Pattern 18                                                   //Prints below pattern (Lines to be odd)
// let str = x; sp = 0; res = "";                                 //    *****    
// for (let i = 1; i <= x; i++)                                   //     * *    
// {                                                              //      *   
//     for (let j = 1; j <= sp; j++)                              //     *** 
//     {                                                          //    *****
//         res += " ";                                                                    
//     }                                                                   
//     for (let k = 1; k <= str; k++)                             
//     {           
//         if (i > 1 && i <= Math.floor(x / 2) && k > 1 && k < str) 
//         {
//             res += " ";
//         }             
//         else
//         {
//             res += "*";
//         }                                 
//     }
//     if (i <= Math.floor(x / 2))
//     {
//         str -= 2;
//         sp++;
//     }
//     else
//     {
//         str += 2;
//         sp--;
//     }
//     res +="\n";
// }
// console.log(res);


// //Pattern 19                                               //Prints below pattern (Lines to be >=5 and odd)
// let res = "";                                              //    * ***    
// for (let i = 1; i <= x; i++)                               //    * *     
// {                                                          //    *****   
//     for (let j = 1; j <= x; j++)                           //      * *
//     {                                                      //    *** *
//         if (i == 1)
//         {
//             if (j == 1 || j >= Math.floor(x / 2) + 1)
//             {
//                 res +="*";
//             }
//             else
//             {
//                 res +=" ";
//             }
//         }
//         else if( i <= Math.floor(x /2))
//         {
//             if (j == 1 || j == Math.floor(x /2) + 1)
//             {
//                 res +="*";
//             }
//             else
//             {
//                 res +=" ";
//             }
//         }
//         else if( i == Math.floor(x /2) + 1)
//         {
//             res += "*";
//         }
//         else if( i < x)
//         {
//             if (j == Math.floor(x / 2) + 1 || j == x)
//             {
//                 res +="*";
//             }
//             else
//             {
//                 res +=" ";
//             }
//         }
//         else
//         {
//             if (j <= Math.floor(x / 2) + 1 || j == x)
//             {
//                 res +="*";
//             }
//             else
//             {
//                 res +=" ";
//             }
//         }
//     }   
//     res +="\n";
// }
// console.log(res);


// //Pattern 20                                                    //Prints below pattern (Lines to be odd)
// let res = "";                                                   //    *   *    
// for (let i = 1; i <= x; i++)                                    //    *   *  
// {                                                               //    * * *   
//     for (let j = 1; j <= x; j++)                                //    ** ** 
//     {                                                           //    *   *
//         if (j == 1 || j == x)
//         {
//             res += "*";
//         }
//         else if( i > Math.floor(x /2) && (i + j == x + 1 || j == i))
//         {
//             res += "*"; 
//         }
//         else
//         {
//             res += " ";
//         }
//     }   
//     res +="\n";
// }
// console.log(res);