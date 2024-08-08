// filter out even elements
let arr = [1, 9, 2, 7,6, 8, 9, 3];

console.log(arr);


function fun(ele){
    if(ele%2!=0){
        return true;
    }
    else return false;
}


// filter:: true -> le lo else mt lo.
let brr = arr.filter(fun);
console.log(brr)
// :::: ::: :::: 
let b = arr.filter(function(ele){
    if(ele%2==0) return true;
    else return false;
})
console.log(b)

// ::: ::: ::: :: :: 
let ra= arr.filter((ele) =>{
    if(ele>5) return true;
    else return false;
})
console.log(ra)


// ::: 
let m= arr.filter((ele)=>{
    return ele<7;
    // return else<7 ? true:false;
})
console.log(m)

let mm= arr.filter((ele)=> ele<7);
    // return else<7 ? true:false;
console.log(mm)