let timer = 60;


function makeBble(){
    let clutter = "";

    let bubbleBox = document.querySelector(".pbutton");
    
    // let userInput = prompt("Enter the bubble size ");
    let userInput = 36;
    
    for(let i=0; i<userInput; i++){
        let randomNumber = Math.round(Math.random()* + 9)
        clutter +=`<h4 class="pbutton-box"> ${randomNumber} </h4>`
    }
    bubbleBox.innerHTML = clutter;
}
function runtTimer(){
    let tiemrStop = setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#timer-cal").textContent = timer;
        }
        else{
            clearInterval(tiemrStop)
            document.querySelector("#pbutton").innerHTML=`<div class="last-result"> <h1> Game Over<h1>
                <h2> Score is ${score} <h2>
            </div>`;
        }
    }, 1000)
}
var randomHit;
function getNewHi(){
    randomHit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = randomHit;
}


// score hit value or funtionality 
let score = 0;
function increaseScore(){
    score +=10;
    document.querySelector("#show-scroe").textContent = score;
}

let pbutton = document.querySelector("#pbutton");

// click ki details milega after clikc runnning 
pbutton.addEventListener("click", function(details){
    let clickNumber = Number(details.target.textContent);
    if(clickNumber===randomHit){
        increaseScore();
        makeBble();
        getNewHi();
    }
    else{
        makeBble();
    }
})
increaseScore();
getNewHi();
runtTimer();
makeBble();
