// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

// another way of declaring array
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

myArr.push(6) // append at the last and reflect the same array
myArr.push(7)
myArr.pop() // delete the last element of an array
// console.log(myArr)

myArr.unshift(9) // add element from starting 
myArr.shift() // delete element from start

// console.log(myArr.includes(9)); // returns boolean value true or false
// console.log(myArr.indexOf(3)); // return the element present at that index

const newArr = myArr.join() // returns string with comma separated elements

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, -2) // return the copy of section of array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // reflect changes in the original array itself
console.log("C ", myArr);
console.log(myn2);