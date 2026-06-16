let numbers = [5, 6, 9, 19, 42];
let pivot = 2;

function concatArray(numbers, pivot) 
{
    let firstHalf = numbers.slice(0, pivot);
    let secondHalf = numbers.slice(pivot+1);

    let combinedArray = firstHalf;

    // combinedArray.push(secondhalf);
    for(let index in secondHalf){
        console.log(secondHalf[index]);
        combinedArray.push(secondHalf[index]);
    }
    return combinedArray;
}

let result = concatArray(numbers, pivot);
console.log(result);