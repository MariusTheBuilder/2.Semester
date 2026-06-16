/*
Exercise 3 from lecture 3: flattening an array using reduce.
*/

let arrays = [[1, 2, 3], [4, 5], [6]];


// Spytter ud som string.
let flatArray = arrays.reduce( (combined, current) => (combined + current), []);
console.log(flatArray);
console.log(typeof flatArray);

// Spytter ud som object.
let flatArray2 = arrays.reduce( (combined, current) => (combined.concat(current)), []);
console.log(flatArray2);
console.log(typeof flatArray2);


// // -> [1, 2, 3, 4, 5, 6]
