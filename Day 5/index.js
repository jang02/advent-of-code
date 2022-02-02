const fs  = require("fs");

let inputArray = fs.readFileSync('input.txt', 'utf8').split('\r\n');

part1();
//part2();


function part1(){
    let data = inputArray;
    let coords = [];
    for(let i = 0; i < data.length; i++){
        let input = data[i].split("->")
        let starts = input[0].split(",")
        let ends = input[1].split(",")

        if(starts[0] === ends[0] || starts[1] === ends[1]){
            for(let k = parseInt(starts[0]); k <= parseInt(ends[0]); k++){

            }
        }
    }
}
function part2(){

}


