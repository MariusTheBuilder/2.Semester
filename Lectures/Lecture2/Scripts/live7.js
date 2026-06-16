let fruits = {
    "apple": 12,
    "orange": 14,
    "pear": 16
};
fruits.banana = 18


let total = 0;
for(let key in fruits) {
    total = total + fruits[key];
}
console.log("The total amount of fruits is: ", total);


// console.log(fruits["banana"]);