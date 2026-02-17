
for (let i = 1; i <= 8; i++) {

}


for (let i = 1; i <= 7; i++) {
    if (i % 2 == 1){
        console.log(' # # # #');
    }
    else if (i % 2 == 0){
        console.log('# # # # ');
    }
}

for(let i = 1; i <= 100; i++)
    {
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log("Fizz-Buzz");
    }
    else if(i % 3 == 0)
    {
        console.log("Fizz");
    }
    else if(i % 5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}
