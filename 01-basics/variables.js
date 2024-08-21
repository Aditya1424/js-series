// const (blocked scope)
// we cannot re-declare and re-initialize the const variable
const accountId = 12345
accountId= 2345
console.log(accountId);

// let (blocked scope)
// we cannot re-declare let variable but we can re-initalize it
let num = 10;
num =20
console.log(num);

// var (functional scope or global scope)
// we can re-declare and re-initialize the var variable
var name = "John";
var name = "Jane";
console.log(name);


// Note: Prefer not to use var keyword because of issue in block scope and functional scope