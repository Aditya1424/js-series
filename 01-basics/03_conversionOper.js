let num = "33"
num = Number(num)
console.log(typeof num) // string

// "33"=> 33 
// "33abc"=>Nan
// null =>0
// undefined => Nan
// true =>1 or false =>0

let score =1
score = Boolean(score) // convert to true
console.log(score)

// 1=> true or 0=> false
// ""=>false
// "aditya"=> true
// null => 0 => false

// ********************Operations*******************


console.log('2'+2); // 22
console.log(2+'2'); // 22
console.log(2+ 3 + '3'); // 53 because precedence is from left to right
console.log('2' + 2 + 3); // 223  because precedence is from left to right
console.log('2' - 1 + '3'); // 13=> in case of minus string convert into a number
console.log(typeof  +true); // 1 because + before true convert the boolean to number


