// trim()
// toUppperCase()
// toLoweCase()
// slice 

// 1. trim()
let firstName = "   rahulk   ";
console.log(firstName.length);  // 12
console.log(firstName);        // "   rahulk   "

firstName = firstName.trim() //  "rahulk"
let t = firstName;
console.log(t);              // "rahulk"
console.log(t.length);      //  6


// 2. toUpperCase()

let up = firstName.toUpperCase();
console.log(firstName,"uppercase : " ,up);

// 3  toLowerCase()

let low = "SiyaRamRAM";
let doLow = low.toLocaleLowerCase();
console.log(doLow);

// 4. slice() 

// start index 
// last index 
let sli = "kumarRa"
let newString = sli.slice(0,3); //  "kum"
console.log(newString);