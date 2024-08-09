// var h = document.getElementById("main");

// let a = [];
// for(let i=0; i<100; i++){
//     var k=`<h1> Good Bye </h1>`;
//     a.push(k);
// }
// // h.innerHTML = a;
// // setTimeout(function(){

// // }, i*1000)
// // h.innerHTML = a;

// // 


// to frint n time same data 
// let s = " ";
// for(let i=0; i<=15; i++){
//     s +="<h1> Good Bye </h1>";
// }
// h.innerHTML = s;
let a = ["https://i.pinimg.com/564x/de/ab/b8/deabb876915a89fa2334ea282329b581.jpg","https://i.pinimg.com/564x/74/49/e6/7449e67844e34d68374c3ab280bd9915.jpg", "https://i.pinimg.com/736x/49/50/41/49504196cabc802fad60d4fd0992d3c0.jpg", "https://i.pinimg.com/564x/7a/64/b9/7a64b9b2806eeaef82882a4b26a91ae8.jpg", "https://i.pinimg.com/736x/00/3c/06/003c06d5335a39359cc81083c08f1b82.jpg", "https://i.pinimg.com/564x/4c/a0/57/4ca057215fc1e2c9950b36797603e0a8.jpg", "https://i.pinimg.com/736x/ff/69/db/ff69dbd2e6825ffe67a2f1b9d24879e2.jpg", "https://i.pinimg.com/564x/0d/c9/42/0dc94236a679e2cb83506194ca43eb25.jpg", "https://i.pinimg.com/736x/42/3b/50/423b50bf2056147054a66aef53e72644.jpg", "https://i.pinimg.com/564x/a8/69/91/a869915fdb507d7de8f23739aa989535.jpg"];


var h = document.getElementById("main");
let s = " ";
let i = 0;
while(i<=90){
    setTimeout(function(){
    let n = Math.floor(Math.random()*a.length);
        s += `<div class="card"> <img src="${a[n]} " ></div>`;
        h.innerHTML = s;
    }, i*1000)
    i++;
}
h.innerHTML = s;


