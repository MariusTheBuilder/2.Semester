/*
Use setInterval to create a repeating timer. 
It should print a number every second, starting from 1.
In this exercise, you should not add a condition for stopping the timer. 
It should stop when you force the program to stop using Ctrl+C.
*/ 

let count = 1;

setInterval (() => {
    console.log(count);
    count = count + 1;
},1000);