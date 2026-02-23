let array = [5, 6, 9, 19, 42, 934, 51, 1];

let threshold = 43;

// Filters the numbers by the expression.
let newarray = array.filter(number => number < threshold);

console.log(array);
console.log(newarray);

//define threshold function in the "standard" way.
let thresholdFunction = function(array, threshold)
{
    let newarray = [];
    for(let i = 0; i <= array.length; i++)
    {
        if(array[i] < threshold)
        {
            newarray.push(array[i]);
        }
    }
    return newarray;
}

let resultArray = thresholdFunction(array, threshold);
console.log(resultArray);