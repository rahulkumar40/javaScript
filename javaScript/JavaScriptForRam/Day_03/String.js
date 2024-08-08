let a = "Raghav garg is coder";
console.log(a, a.length);
console.log(a[3]);
console.log(a[2]);
console.log(a[1]);

console.log("Pring all elem")
for(let i=0; i<a.length; i++){
    console.log(a[i]);
}

for(const ch of a){
    console.log(ch);
}