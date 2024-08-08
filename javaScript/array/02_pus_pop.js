// array push pop : these are vary fast as compare to shift and unshift 

// array shift unshift 

let fruits = ["apple", "mango","grapes"];
console.log(fruits);              
// output:    [ 'apple', 'mango', 'grapes' ]

//push
console.log("Push the element into ", fruits , "\n");
fruits.push("banana");
console.log(fruits);   // output: [ 'apple', 'mango', 'grapes', 'banana' ]

// pop : it will pop or delete from ending. 
fruits.pop();
// console.log(fruits.pop())  // banana
console.log(fruits);   // output: [ 'apple', 'mango', 'grapes' ]



// Unshift() : it is method into array, to add new element at beagining or 0th idx of array. 
//like queue in dsa 
console.log("perform unshift method into array : to add new element at beagining");
let bookName = ["html", "javaScript", "java", "Rlag"];
console.log("pre \t",bookName);
bookName.unshift("computerNet");
bookName.unshift("python")
console.log("after \t",bookName,"\n");

// shift : it remove at the starting 
let nameK = ["rahul", "kumar", "priya", "raj"];
console.log("array befor shift() : \n",nameK);       //  [ 'kumar', 'priya', 'raj' ]
let removeName = nameK.shift();
console.log("array after shift() : \n",removeName); // element at beagining indext // rahul
console.log("finally array of name : ",nameK);
