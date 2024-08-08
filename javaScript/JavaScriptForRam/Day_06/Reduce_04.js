let arr = [3, 4, 5, 2, 6, 1 ];
console.log(arr)

arr = arr.sort();
console.log(arr);

arr = arr.sort(function(a, b){
    return b-a;
});
console.log(arr);

arr = arr.sort(ele => b-a);
console.log(arr);