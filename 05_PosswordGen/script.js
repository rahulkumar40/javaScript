let input = document.querySelector("#inputSlid");
let sliderValue = document.querySelector("#sliderValue");
console.log(input)
console.log(sliderValue)
// it is used to execute the range of input possword .
// it show only static value which is given by myself.
sliderValue.textContent=input.value; 
console.log(input.value)



// 1st step
// showing input slider value
input.addEventListener("input", ()=>{
    // here after every click rang span value will change 
    sliderValue.textContent=input.value; 
    
    
})



let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbol = document.getElementById("symbol");
let genBtn = document.getElementById("genBtn");

let copyIcon = document.getElementById("copy-icon");

// 2nd step
genBtn.addEventListener("click", ()=>{
    passBox.value = generatePassword();
})

// step 4
let lowerCases = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbol = "`@#$%^&*";


// 3rd step 
function generatePassword(){
    let genPassword = "";

    let allChars = "";
    // genPassword = Math.round(Math.random()*9);
    // return genPassword

    // after inner 3 step and reletate 
    // step 4 

    allChars += lowercase.checked ? lowerCases:"";
    allChars += uppercase.checked ? upperChars:"";
    allChars += numbers.checked ? allChars:"";
    allChars += symbol.checked ? allSymbol:"";

    if(allChars=="" || allChars.length == 0){
        return genPassword;
    }



    // 1. Math.round(Math.random()
    // 2. Math.round(Math.random()*upperChars.length)
    // 3. upperChars.charAt(Math.round(Math.random()*upperChars.length));

    // step 5
    let i=1;
    while(i<=input.value){
        genPassword += allChars.charAt(Math.round(Math.random()*allChars.length));
        i++;
    }
    // upperChars.charAt(genPassword);
    return genPassword;
}

copyIcon.addEventListener("click", ()=>{
    if(passBox.value!= "" || passBox.value.length>=1)
    {   
        navigator.clipboard.writeText(passBox.value);
        copyIcon.title = "Password Copied";

        copyIcon.innerText = "Checked";

        console.log(copyIcon.title)
    }
})