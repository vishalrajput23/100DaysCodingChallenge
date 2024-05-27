                                                                      
let str = "i love programming";                            //Capitalize first letter of each word
console.log(str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));

