/*
Write another function that takes a number as input and returns a Promise object
Promise resolves if number is larger than 5
Argument for resolve() should be “Success!”
Otherwise, it rejects
Argument for reject() should be an Error object with the string “Failure!”
*/

function checkNumberPromise(number)
{
    let promise = new Promise(function(resolve, reject)
    {
        console.log("Inside Promise");
        if(number > 5)
        {
            resolve("Success");
        }
        else
        {
            reject(new Error("Failure"));
        }

    });
return promise;
}
// 1 = Error. 
// 11 = Success.
checkNumberPromise(11)
.then( result => console.log(result))
.catch( error => console.log(error.message));