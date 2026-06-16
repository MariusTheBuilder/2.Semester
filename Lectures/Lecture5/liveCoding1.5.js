/*
First code produces a result (after a delay).
We use .then to use the result.
This is the consuming part.
Note: result is a member of the promise object
*/

let promise = new Promise(function(resolve, reject) {
setTimeout(() => resolve("done!"), 1000);
});

promise.then(
result => console.log(result)
);
