 const marvel_heros = ["Thor", "Ironman", "Dr.Strange"]
 const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)  //[ 'Thor', 'Ironman', 'Dr.Strange', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros.length);  // 4
// console.log(marvel_heros[3][1]);    //flash 

const allHeros = marvel_heros.concat(dc_heros)  // return new array
console.log(allHeros)  //[ 'Thor', 'Ironman', 'Dr.Strange', 'superman', 'flash', 'batman' ]

// Spread Operator

const all_new_heros = [...marvel_heros, ...dc_heros]   // no boundation we add more than two array
console.log(all_new_heros);   //[ 'Thor', 'Ironman', 'Dr.Strange', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [0, 1]]]

const newArr = another_array.flat(Infinity)
console.log(newArr);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]

console.log(Array.isArray("Sakshi"));  // false
console.log(Array.from("Sakshi"));   // [ 'S', 'a', 'k', 's', 'h', 'i' ]  object string

console.log(Array.from({name: "Sakshi"}));  //[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]
//Returns a new array from a set of elements.

