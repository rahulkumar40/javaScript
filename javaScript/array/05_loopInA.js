// for loop in array 
// use html for corect output 
let num1 = [1,2,3,4,6]
for(let i=0; i<=4; i++){
    console.log(num1[i]);
}


// array length property : it tell about the array length.

let array_1 = ["rahul","kumar","sir","vivek"];
console.log("array length : ")
console.log(array_1.length);
for(let i=0; i<=array_1.length-1; i++){
    console.log("index", i,"=",array_1[i]);
}

// upper case 
let array2 = ["a","b","abc","dmg"]
for(let i=0; i<=array2.length; i++)
{
    console.log(array2[i].toUpperCase());
}