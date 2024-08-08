// switch statement 

let day = 3;
switch(day){
    case 0:
        console.log("sunday");
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thrusday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
    default:
        console.log("Invalid Day");
}
// above code execute then after matched and after all code execute 
// Wednesday
// Thrusday
// Friday
// Saturday
// Invalid Day

// break keyword 
console.log("Execution of break keyword it will execute only match case");
let dayOfWeak = 3;
switch(day){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}

    // get day 

    console.log("Today with me");
    console.log("heloloajdflk a");

    switch(new Date().getDay()){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
    }


