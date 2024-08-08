// undefined 
// null

let firstName;
console.log(typeof firstName);  // undefined
firstName = "rahul";
console.log(typeof firstName, firstName);  // string

// null: means nothing 
let myVariable = null;
console.log(myVariable,typeof myVariable);  // object 
// bug, error type of null = object : 


// BigInt
let myNumber = 123;
console.log(myNumber);
// limit of number 
console.log(Number.MAX_SAFE_INTEGER);

//BIGINT 
let myBigIntNum = BigInt(12)
let myBig = 23n;
console.log(myBigIntNum);
console.log(myBig);

console.log(myBig + myBigIntNum); // ok
// * console.log(myBig + myBigIntNum + 49); // not ok 

// BigInt operation are performed with ony BigInt datatype 


