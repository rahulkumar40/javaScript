// if else condition 

let age = 18;
// only if 
if(age>19){
    console.log("user can play game free fire ");
}

// only else block 
else{
    console.log("user can play pubg ");
}

// both if and else together 
if(age>19){
    console.log("user cannot play pubg ");
}
else{
    console.log("user can play pubg ");
}


let num = 13; 
if(num%2==0){
    console.log("even number ");
}
else{
    console.log("odd number ");
}

// nested if else 
// winnig number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 19; 
let userGuss = prompt("Guesss a age");

if(userGuss === winningNumber)
{
    console.log("your guess is right ");
}
else{
    if(userGuss<winningNumber)[
        console.log("you are too low")
    ]
    else{
        console.log("you are too high");
    }
}

// if 
// else if 
// else if 
// else if 
// else
// one condition execute at a time 
let tempInDegree = 15;
if(tempInDegree<0){
    console.log("extremely cold outside");
}
else if(tempInDegree<16){
    console.log("It is cold outside");
}
else if(tempInDegree<25){
    console.log("wheather is okay ");
}
else if(tempInDegree<35){
    console.log("lets go for swim");
}
else if(tempInDegree<45){
    console.log("turn on AC")
}
else{
    console.log("too hot!!!");
}


