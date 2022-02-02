const fs  = require("fs");

let inputArray = fs.readFileSync('input.txt', 'utf8').split('\n').map(Number);

let count = 0;

for(let i = 0; i < inputArray.length; i++){
    if((inputArray[i] + inputArray[(i+1)] + inputArray[(i+2)]) < (inputArray[(i+1)] + inputArray[(i+2)] + inputArray[(i+3)])){
        count++;
    }
}
console.log(count);

