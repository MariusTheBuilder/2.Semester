let array = ["I", "am", "here"];

console.log(array);


//Delete middle element with delete.
delete array[1];

console.log(array);
console.log(array.length);

//Remove middle element with splice.
let newArray = ["i", "am", "here"];

newArray.splice(1,1);
console.log(newArray);
console.log(newArray.length);

//Add a new element with splice.
newArray.splice(1, 0, "was");
console.log(newArray);