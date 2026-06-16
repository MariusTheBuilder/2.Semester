const checkInput = function()
{
    let userInput = prompt("Please enter a number:");
    let userNumber = Number(userInput);

    if (!Number.isNaN(userNumber))
    {
        for(let n = 1; n <= userNumber; n++)
        { 
            console.log(n);
        }
    }
    else
    {
        alert("The input is not a valid number.");
    } 
    return "Function was called"
}
let status = checkInput();
console.log(status);