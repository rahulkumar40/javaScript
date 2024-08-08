// let n = 9;
// for(let i=0; i<=n; i++){
//     console.log(i);
// }


/// 
// function OneToN(n){
//     for(let i=0; i<=n; i++){
//         console.log(i);
//     }
//     console.log( );
// }
// OneToN(2);
// OneToN(9);

let a = -2;
let b = 3;
console.log(Math.abs(a*a*a) + (b*b*b));
console.log((a*a*a) + (b*b*b));
console.log(Math.abs(a*a*a) - (b*b*b));

console.log("Line number 4ram")
function eqn(a,b){
    var b = (a*a*a) + (b*b*b);
    return b;
}
console.log(eqn(-2, 3))


console.log(Math.floor(5.6));
console.log(Math.floor(-3.6));
console.log(Math.ceil(5.8));

console.log(t)
for(let i=0; i<10; i++){
    var t = Math.random();
    console.log(t);
}

// write a code to generate a randome number between 0 and 9
for(let i=0; i<10; i++){
    var num = Math.random();
    // console.log(num * 10);
    console.log(num + " :: " + Math.floor(num*10))
}

for(let i=0; i<10; i++){
    var num = Math.random();
    // console.log(num * 10);
    console.log(num + " :: " + Math.ceil(num*10))
}
// Homework :: write code to generate a random integer between 0 10 10 (included).

// homework :: write code to generate a random integer between -10 and 10 (included).
// 

for(let i=0; i<10; i++){
    
if(Math.random()<0.5){
    console.log("hello");
}
else{
    console.log("Bye");
}
}