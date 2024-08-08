// ternary operator 

let age = 15; 
let drink; 
if(age>=5){
    drink = "coffee";
}
else{
    drink = "milk"
} 
console.log(drink);   // coffee 

// ternary operator // conditional operator 

let ag = 5;;
let sho = age >= 30 ? "codd " : "mil ";
console.log(sho);


function fibboNachi(num_1, num_2){
    let sum = num_1 + num_2;
    return sum;
}

let c = +prompt("eneter the value of c ");
let d = +prompt("eneter the value of d ");
let a = fibboNachi(c,d);
console.log(a);