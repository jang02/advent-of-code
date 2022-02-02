const fs  = require("fs");

let inputArray = fs.readFileSync('input.txt', 'utf8').split('\r\n');

//part1();
part2();

function part1(){
    let mostPopular = "";
    let leastPopular = "";

    let binaryZero = [0,0,0,0,0,0,0,0,0,0,0,0];
    let binaryOne = [0,0,0,0,0,0,0,0,0,0,0,0];

    for(let i = 0; i < inputArray.length; i++){
        let data = inputArray[i].split("");
        for(let j = 0; j < data.length; j++){
            data[j] === "0" ? binaryZero[j]++ : binaryOne[j]++
        }
    }
    for(let i = 0; i < binaryOne.length; i++){
        if(binaryZero[i] > binaryOne[i]){
            mostPopular += "0";
            leastPopular += "1";
        }
        else{
            mostPopular += "1";
            leastPopular += "0";
        }
    }
    console.log(parseInt(mostPopular, 2) * parseInt(leastPopular, 2))
}

function part2(){
    let binaryZero = 0;
    let binaryOne = 0;

    let data1 = inputArray;
    let data2 = inputArray;

    while(data1.length > 1){
        for(let j = 0; j < 12; j++){
            let newArr = [];
            let winner = "";
            binaryZero = 0;
            binaryOne = 0;
            if(data1.length !== 1){
                for(let i = 0; i < data1.length; i++){
                    let string = data1[i].split("");
                    string[j] === "1" ? binaryOne++ : binaryZero++;
                }
            binaryOne >= binaryZero ? winner = "1" : winner = "0";
            for(let i = 0; i < data1.length; i++){
                let string = data1[i].split("");
                if(string[j] === winner){
                    newArr.push(data1[i]);
                }
            }
            }

            data1 = newArr;
        }
    }
    console.log(data1);
    while(data2.length > 1){
        for(let j = 0; j < 12; j++){
            let newArr = [];
            let winner = "";
            binaryZero = 0;
            binaryOne = 0;
            if(data2.length !== 1){
                for(let i = 0; i < data2.length; i++){
                    let string = data2[i].split("");
                    string[j] === "1" ? binaryOne++ : binaryZero++;
                }

            binaryZero <= binaryOne ? winner = "0" : winner = "1";
            for(let i = 0; i < data2.length; i++){
                let string = data2[i].split("");
                if(string[j] === winner){
                    newArr.push(data2[i]);
                }
            }
                data2 = newArr;
            }


        }

    }
    console.log(parseInt(data1[0], 2) * parseInt(data2[0], 2));
}

