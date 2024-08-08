// how to clone array 
// how to concatenate two array 

let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1===array2)

console.log(array1)
console.log(array2)

// diff way to determine
console.log("different way : ")
let arr = ["a","b","c"]
let arr2 = arr.slice(0);
arr.push(0);
console.log(arr===arr2)
console.log(arr)
console.log(arr2)


// new way 
// seread operator : it is perator by which we can create clone of any array 
// it take [...ArrayName]    : tree dot + ArrayName
let nee = ["ram","rk","priya","kumar"]
let neww = [...nee];
console.log(nee===neww);
console.log(nee)
console.log(neww)

// concatenate two arrays

let a = ["item1","item2","item3"]
let b = [].concat(a,["item4","item5"]);
console.log(a===b)
console.log(a)
console.log(b)

// we also add arrray element with the help of sepead operator[...]
console.log("concating array elment with the help of sepread operator ")
let money = ["tow","five","cr","please"]
let conver = [...money,"rupees","paisa","sir"]
console.log("check money and cover are = or not ")
console.log(money===conver)
console.log("before adding ",money)
console.log("after adding \n",conver)

let addMultiArray = [...a,...nee,...arr];
console.log("This is new multiple array : \n",addMultiArray);