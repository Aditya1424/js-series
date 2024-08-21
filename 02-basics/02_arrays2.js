const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// using spread operators
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// flat method returns new array with all subarray elements concatenated
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // checks whether it is array or not
console.log(Array.from("Hitesh")) // creates an array of that string characters
console.log(Array.from({name: "hitesh"})) // interesting--> []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// returns new array with set of elements