// break keyword

// continue keyword 

for(let i=1; i<=10; i++){
    if(i===4){
        break;
    }                       // execution outside the block 
    console.log(i)
}                       // output: 1 2 3 
console.log("hello there");

// continue keyword
for(let i=1; i<=10; i++){
    if(i===4){
        continue;
    }                       // execution again continue except itself
    console.log(i)
}                     
//   output: 0 1 2 3 5 6 7 8 9 10
console.log("hello there");



// do-while loop 
let i =0; 
// while(i<=9){
//     console.log(i);
//     i++;
// }

// it run atleast one time while execution 
do{
    console.log(i);
    i++
}while(i<=9);
console.log("value of i is ",i);