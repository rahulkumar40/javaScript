let s1 = document.querySelector("#sr_1");
s1.addEventListener("mouseenter", function(){
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `${r}`;
})
s1.addEventListener("mouseleave", function(){
    s1.innerHTML = "1";
})
let x = document.getElementById("sr_2");
let col = "green";
x.addEventListener("mouseenter", function(){
    if(col=="green"){
    x.style.background = "green";
        col = "red";
    }
    else if(col=="blue"){
        x.style.background = "blue"
        col = "red";
    }
    else{
        x.style.background = "red";
        col = "blue";
    }
})

x.addEventListener("mouseleave", function(){
    x.style.background = "white";
})
let box3 = document.getElementById("sr_3");
box3.addEventListener("mouseenter", function(){
    let i = Math.floor(Math.random()*256);
    let j = Math.floor(Math.random()*256);
    let k = Math.floor(Math.random()*256);
    box3.style.background = `rgb(${i}, ${j}, ${k})`;
})
box3.addEventListener("mouseleave", function(){
    let i = Math.floor(Math.random()*256);
    let j = Math.floor(Math.random()*256);
    let k = Math.floor(Math.random()*256);
    box3.style.background = `white`;
})
let c = document.getElementById("sr_4");


c.addEventListener("mouseenter", function(){
    let i = Math.floor(Math.random()*256);
    let j = Math.floor(Math.random()*256);
    let k = Math.floor(Math.random()*256);
    // box3.style.background = "blue";
    // if(i>j && j>k)
    box3.style.background = `rgb(${i}, ${j}, ${k})`;
    // else if(i<j && j>k)
    s1.style.background = `rgb(${j}, ${k}, ${i})`;
    // else
    x.style.background = `rgb(${k}, ${i}, ${i})`;
})
c.addEventListener("mouseleave", function(){
    c.style.background = "white";
    box3.style.background = "white"
    x.style.background = "white"
    s1.style.background = "white"
})
let s = document.querySelector("h1")
s.innerHTML = "ram"
let crsr = document.getElementById("coursor")
let cd = document.getElementById("main")
cd.addEventListener("Click", function(d){
    console.log(d.x);
})