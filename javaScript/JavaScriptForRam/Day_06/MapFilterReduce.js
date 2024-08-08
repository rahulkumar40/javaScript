let arr = [1, -6,3, -8];
console.log(arr)
let brr = [];
for (const ele of arr) {
    brr.push(ele*2);
}
console.log(brr)

let a = [];
for (const ele of arr) {
    a.push(Math.abs(ele));
}

console.log("Original :: ")
console.log(a)
function twice(x){
    return 2*x;
}
function square(x){
    return x*x;
}

console.log("Original :: ")
let b = arr.map(twice);
// hr ek element to le kr jayega
console.log(b);

console.log("Original :: ");
console.log(arr);
let c = arr.map(square);
console.log(c)

// short hand of map ::::: :::: :::: ::: 
let aa = arr.map(function(ele){
    return ele*ele;
});
console.log("Original :: ")
console.log(arr)
console.log(aa)

let ab = arr.map(function(ele){
    return ele*ele*ele;
});
console.log("Original :: ")
console.log(arr)
console.log(ab)


/// ::: :: ::: :: ::: :: ::: :: :: :: :: 
let l = arr.map((ele)=>{
    return ele*ele;
})
console.log("Original :: ")
console.log(arr)
console.log(l)


console.log("Before Change.")
console.log(arr)

// :::: ::: :::: ::: ::: ::: :: ::: ::: ::: :: ::: 
// Simple method to implement the map method.
arr = arr.map((ele)=> ele*ele)
console.log("Afeter changed :: ")
console.log(arr)