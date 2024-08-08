// type of operator 

// data type (primitive data )
// string "rahul"
// number 2, 4, 5, 6
// booleans
// uderfined
// null
// BigInt
// Symbol 

// 1. data type (primitive data )
// syntax: typeof variableName ; // here typeof keyword 
let age = 22; 
let firstName = "rahul";  // string

let t = typeof firstName;    

console.log(t);             // number
console.log(typeof age);    // string 

console.log(typeof 4.5);

// covert number to string. 
// *console.log(typeof(age+""));
let num = 23;
num = num + "";                
console.log(num);           // 23
console.log(typeof(num));   // string


// convert string to number. 
// by add + symbol before a string = number 
let myStr = "43";
let okStr = +myStr;
console.log(myStr,":",typeof myStr);  // 43 : string

console.log(okStr,":",typeof okStr);  // 43 : number

// other way 
let aim = "500 cr";
let team = Number(aim);
console.log("aim : ",aim,":","type : ",typeof team,": value of team :",team);
// output: aim :  500 cr : type :  number : value of team : NaN --> nan = not a number 