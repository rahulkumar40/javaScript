let s1 = document.querySelector("#sr_1");
// let s2 = document.getElementById("sqr2");
// let s3 = document.getElementById("sqr3");
s1.addEventListener("mouseenter", function(){
    // s1.style.color = "blue";
    // s1.style.background = "green";
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `${r}`;
})
s1.addEventListener("mouseleave", function(){
    // s1.style.color = "black";
    // s1.style.background = "aqua";
    s1.innerHTML = "1";
})

//////
s1.addEventListener("dbclick", function(){
    let i = Math.floor(Math.random()*100);
    let j = Math.floor(Math.random()*100);
    let k = Math.floor(Math.random()*100);
    box3.style.background = `rgb(${i}, ${j}, ${k})`;
})
s1.addEventListener("mouseleave", function(){
    
    
})



///
let x = document.getElementById("sr_2");

let col = "green";
x.addEventListener("mouseenter", function(){

    // x.style.color = "rgb(255,255,58)";
    // let i = Math.floor(Math.random()*100);
    // let j = Math.floor(Math.random()*100);
    // let k = Math.floor(Math.random*100);
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
    x.style.background = "aqua";
})
// rgb(178, 219, 144); a, b, c --> 255

// x.addEventListener("mouseleave", function(){
//     x.style.color = "black";
//     x.style.background = "aqua";
// })
// s1.innerHTML = "ram";
// s1.addEventListener("mouseenter", function(){
//     s1.style.background = "red";
//     s1.style.color = "black";
// })
// s1.addEventListener("mouseleave", function(){
//     s1.style.background = "white";
// })

let box3 = document.getElementById("sr_3");
// box3.addEventListener("click", function(){
//     let i = Math.floor(Math.random()*100);
//     let j = Math.floor(Math.random()*100);
//     let k = Math.floor(Math.random()*100);
//     box3.style.background = `rgb(${i}, ${j}, ${k})`;
// })

box3.addEventListener("mouseenter", function(){
    let i = Math.floor(Math.random()*256);
    let j = Math.floor(Math.random()*256);
    let k = Math.floor(Math.random()*256);
    // box3.style.background = "blue";
    box3.style.background = `rgb(${i}, ${j}, ${k})`;
})
box3.addEventListener("mouseleave", function(){
    let i = Math.floor(Math.random()*256);
    let j = Math.floor(Math.random()*256);
    let k = Math.floor(Math.random()*256);
    // box3.style.background = "blue";
    box3.style.background = `aqua`;
})


let c = document.getElementById("sr_4");

// c.addEventListener("click", function(){
//     let i = Math.floor(Math.random()*256);
//     let j = Math.floor(Math.random()*256);
//     let k = Math.floor(Math.random()*256);
//     // box3.style.background = "blue";
//     if(i>j && j>k)
//     box3.style.background = `rgb(${i}, ${j}, ${k})`;
//     else if(i<j && j>k)
//     s1.style.background = `rgb(${i}, ${j}, ${k})`;
//     else
//     x.style.background = `rgb(${i}, ${j}, ${k})`;
// })



// c.addEventListener("mouseenter", function(){
//     let i = Math.floor(Math.random()*256);
//     let j = Math.floor(Math.random()*256);
//     let k = Math.floor(Math.random()*256);
//     // box3.style.background = "blue";
//     // if(i>j && j>k)
//     box3.style.background = `rgb(${255}, ${j}, ${k})`;
//     // else if(i<j && j>k)
//     s1.style.background = `rgb(${i}, ${255}, ${k})`;
//     // else
//     x.style.background = `rgb(${i}, ${j}, ${255})`;
// })

//
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
    c.style.background = "aqua";
    box3.style.background = "aqua"
    x.style.background = "aqua"
    s1.style.background = "aqua"
})
let s = document.querySelector("h1")
s.innerHTML = "ram"


/// 
let crsr = document.getElementById("coursor")
let cd = document.getElementById("main")

cd.addEventListener("Click", function(d){
    console.log(d.x);
})