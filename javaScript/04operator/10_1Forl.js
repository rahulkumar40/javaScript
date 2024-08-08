// for loop
// same 

// let i =0; 
// for(;i<=9; i++){
//     console.log(i)
// }                output: 0 1 2 3 4 5 6 7 8 9 10 

// normal life always used 
for(let i=0; i<=10; i++){
    console.log(  i + " ");
}

// console.log("value of i is ",i) ;  // not define in javascript 
// for (var j=0; j<3; j++){
//     console.log(j);
// }                    output: 0 1 2 

// 10 first natural number sum 
let total = 0; 
let num = 10; 
for(let i=0; i<=num; i++){
    total = total+i;
}
console.log("sum : ", total)

// fot in loop :: it is many for object 
var temp = " "
var per = {
    age: 12,
    name : "rahul", 
    add : "mardapur", 
    mobNo: 8474
}
for(value in per){
    // console.log(per);
    temp +=per[value] + " ";
    console.log(temp);
}
console.log("Per object all memebr\n" + temp)

// for(value of per){
//     console.log(per)
// }

var a = ["a" , "b", "c", "d", "e"];
for(var i=0; i<a.length; i++){
    console.log(a)
}


