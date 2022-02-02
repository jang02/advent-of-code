const fs  = require("fs");

let inputArray = fs.readFileSync('input.txt', 'utf8').split('\r\n');

//part1();
part2();


function part1(){
    let data = inputArray[0].split(",").map(Number);

    for(let i = 0; i < 256; i++){
        let arr = [];
        arr = data;
        for(let k = 0; k < data.length; k++){
            if(data[k] > 0){
                data[k] -= 1;
            }
            else{
                arr.push(9)
                arr[k] = 6;
            }
        }
        data = arr;
    }
    console.log(data.length);
}
function part2(){
    let data = inputArray[0].split(",").map(Number);
    fishies = [];
    for(let i = 0; i < data.length; i++){
        fishies[["0"]]
    }
    console.log(fishies);
}


