/*
Use setTimeout to schedule printing two different strings using console.log.
The first string should be: "One second has passed." and it should be printed after one second.
The second string should be: "Two seconds have passed." and it should be printed after two seconds.
Each of these two strings should only be printed once.
*/

setTimeout (() => console.log("One second have passed"), 1000);

setTimeout (() => console.log("Two seconds have passed"), 2000);