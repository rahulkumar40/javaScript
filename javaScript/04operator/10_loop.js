// wile loop 
// in coding has a concept "dry = don't repeat yourself"
let i=0;          // 0 1 2 3 4 5 6 7 8 9 10 
// console.log(i);   
// i++;
// console.log(i);
console.log("uses of while loop");
while(i<=9){
    console.log(i);
    i++
}
console.log(`current value of i is ${i}\n`);


// sum of first 10 natural number 
console.log("sum of first 10 natural number ")
let Num = 10; 
let start =0;
let sum=0; 
while(start<=Num){
    sum = sum+start;
    start++
}
console.log(sum);

let total = (Num*(Num+1))/2;
console.log("sum : ",total);

