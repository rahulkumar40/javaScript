// let arr = [2, 3, 4, 5,];
// arr[0] = 9;
// console.log(arr)



// const ans = [4, 5, 7, 5];
// ans[0] = 4; // error
// ans.push(4);
// console.log(ans)


// ans = 2.4;
// console.log(ans)

// all value through single variable.
// let a = [4, "rahul", 7.8, true];
// console.log(a)

// // 
// brr = [[1, 2, 3], [4, 5, 6, "rahul"]];
// console.log(brr)

// let b = [4, "rahul", 7.8, true,[1, 2, 3] ];
// console.log(b)



// print the array 
// for each or for in looop
// console.log("All element of the array.")
// for(let i=0; i<b.length; i++){
//     console.log(b[i]);
// }




// let b = [4, 7, 8,1, 2, 3] ;
// console.log(b)
// for(let i=0; i<b.length; i++){
//     b[i] *=2;
// }
// console.log(b)
// forOf loop :: value ki copy banata hai hr bar.
// index can not be printed into this type of funtion
// for(let i of b){
//     i *=2;
//     console.log(i)
// }



brr = [4, 3, 5, 6, 7];
brr.forEach((ele, i, brr) => {
    console.log(ele, i, brr)
});