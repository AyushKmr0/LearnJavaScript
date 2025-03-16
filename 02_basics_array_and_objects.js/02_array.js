const marvel_heros = ['Thor', 'Ironman', 'Spiderman']

const dc_heros = ['Superman', 'Batman', 'Wonderwoman']


marvel_heros.push(dc_heros);    // this will add dc_heros as a single element in marvel_heros 


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros); // this will add dc_heros as a single element in marvel_heros
console.log(allHeros);  


// spread operator is used to add all the elements of the array in the new array 
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


const newArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_newArray = newArray.flat(2);
console.log(real_newArray);




console.log(Array.isArray("Ayushkr"));  // check if the given value is an array or not
console.log(Array.from("Ayushkr")); // convert string to array
console.log(Array.from({ name: "Ayush"}));  // Empty Array => []


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));