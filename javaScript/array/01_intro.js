// intro to array : colletion of element 
//                  ordered colletion of item 

// reference type 
// how to create array 

let fruits = ["apple","mango", "grapes"];
console.log(fruits);
// console.log(fruits[0]);  // apple
// console.log(fruits[1]);  // mango
// console.log(fruits[2]);  // grapes
console.log("with the help for loop : array element ")
for(let i=0; i<3; i++){
    console.log(fruits[i]);
}

let numbers = [1,2,3,4];
let mixed = [1,2,3,4.5,"string", null, undefined];
for(let i=0; i<6; i++){
    console.log(mixed[i]);
}                           // 1 2 3 

// array are mutable : means it is changable hence we can change its index and put where other value 
let bookName = ["html", "javaScript", "java", "Rlag"];
console.log(bookName);
bookName [1] = "c++";       // [ 'html', 'javaScript', 'java', 'Rlag' ]
console.log(bookName);     // [ 'html', 'c++', 'java', 'Rlag' ]

// java is reference type language == object 
// in javaScript array is object 


//type check 
console.log(typeof mixed);    // object 

// to check it actually array or not 
let t = Array.isArray(mixed);
console.log(t);                // true
