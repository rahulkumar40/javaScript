// object is kind of like map/dictionary where we hage key=value pair
var details = ["raghav", 24, false]
console.log(details)

let x = {
    name : "raghav",
    age : 24, 
    percentage : 93.4,
    isMarried : false,
};
console.log(x)
// { name: 'raghav', age: 24, percentage: 93.4, isMarried: false }

let car = {
    name:"honda City",
    "nick name" : "raghu",
    mielage: "45km/h"
};
console.log(car)
console.log(car.name);
console.log(car["nick name"]);

// change in object 
console.log(x.age)
x['age'] = 30;
console.log(x.age)

for (const key in x) {
    if (Object.hasOwnProperty.call(x, key)) {
        console.log(key , x[key]);    
    }
}

for (const key in x) {
        console.log(key , x[key]);    
}

for (const key in x) {
    console.log(key, x[key])
    
}
