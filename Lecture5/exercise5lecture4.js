/* 
Use setInterval to create a repeating timer. 
It should print a number every second, starting from 1.

In this exercise, you should not add a condition for stopping the timer. 
It should stop when youforce the program to stop using Ctrl+C.

Continuing from exercise 4, add code so that when the timer reaches 5, it is stopped.
*/

let count = 1;

let intervalId = setInterval(() => {
    console.log(count);
    count = count + 1;
    if(count > 5)
    {
        clearInterval(intervalId);
    }
}, 1000);

/*
let count = 1;

let intervalId = setInterval(() => {
    console.log(count);

    if(count === 5) {
     clearInterval(intervalId);
    }
    count = count + 1;
    }, 1000);
*/

