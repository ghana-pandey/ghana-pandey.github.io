"use strict";
const numArray = [5, 0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, {
    name:
        "Barney", age: 80
}]
const doubleArr = numArray.map(n => n * 2);
console.log(doubleArr);

let doublePeopleArr = peopleArray.map(obj => obj.age * 2);
console.log(doublePeopleArr);

let filtered = numArray.filter(n => n % 2 === 0);
console.log(filtered);

let filteredPeopple = peopleArray.filter(obj => obj.age > 10);
console.log(filteredPeopple);
let sum = numArray.reduce((acum, ele) => acum + ele);
console.log(sum);

let average = sum / numArray.length;
console.log(average);

let max = numArray.reduce((acum, ele) => acum > ele ? acum : ele);
console.log(max);

const maxAge = peopleArray.reduce(
    (max, values) => (values.age > max ? values.age : max),
    peopleArray[0].age
);

console.log(maxAge);

