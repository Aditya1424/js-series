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