let styles = ["Jazz", "Blues", "Pop", "Folk"];
styles.push("Rock-n-Roll");
console.log(styles);

let middleIndex = Math.floor(styles.length/2);
console.log("MiddleIndex:", middleIndex);

styles[middleIndex] = "Classics";
// styles[1]="Classics";

console.log(styles);
let firstValue = styles.shift();
console.log(firstValue);
styles.unshift("Reggae");
styles.unshift("Rap");
console.log(styles);
