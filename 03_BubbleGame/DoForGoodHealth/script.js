



// 1st step 
const createElement = ()=>{
    elemnet = "";
    const sizeOfItem = document.querySelector(`#size-bubble.value`)

    console.log(sizeOfItem)
    for(let i=0; i<9; i++){
        let randomBubbleValue = Math.round(Math.random()*10);
        // console.log(randomBubbleValue)

        elemnet +=`<div class="box-item">
                        ${randomBubbleValue}
                    </div>`;
        document.querySelector(".buttom-section").innerHTML = (elemnet);
    }
}

let time = 60;
const runtTimer = ()=>{
    let timer = document.querySelector('#timer');
    console.log(time)
    console.log(timer);
    setInterval(() => {
        time -=1;
        if(time>0){
            timer.textContent = time;
        }
    }, 5000);
}

function handleClick(event) {
    const clickedNumber = Number(event.target.textContent);
    if (clickedNumber === randomHit) {
        increaseScore();
    }
    makeBubble();
}

// 1st step method
createElement();

runtTimer();