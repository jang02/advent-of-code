const fs  = require("fs");

let inputArray = fs.readFileSync('input.txt', 'utf8').split('\r\n');

//part1();
part2();


function part1(){
    let nums = inputArray[0].split(",");

    let charts = [];

    let index = 2;

    for(let i = 0; i < ((inputArray.length -2) / 6); i++){
        let card = [];
        for(let j = 0; j < 5; j++){
            let line = inputArray[index++];
            for(let k = 0; k < 5; k++){
                card.push([line.substring(k * 3, k * 3 + 2).replace(" ", ""), false]);
            }
        }
        index++;
        charts.push(card);
    }

    for (let i = 0; i < nums.length; i++){
        for(let j = 0; j < charts.length; j++){
            for(let k = 0; k < charts[j].length; k++){
                if(charts[j][k][0] === nums[i]){
                    charts[j][k][1] = true
                }
            }
        }


        //loop all cards
        for(let j = 0; j < charts.length; j++){

            //loop all rows
            for(let k = 0; k < (charts[j].length/5); k++){
                if(charts[j][k*5][1] === true && charts[j][k*5+1][1] === true && charts[j][k*5+2][1] === true && charts[j][k*5+3][1] === true && charts[j][k*5+4][1] === true){
                    let sum = 0;
                    for(let p = 0; p < charts[j].length; p++){
                        if(charts[j][p][1] === false){
                            sum+= parseInt(charts[j][p][0]);
                        }
                    }
                    console.log(sum);
                    console.log(nums[i]);
                    return console.log(sum*nums[i]);
                }
            }

            //loop all colums
            for(let k = 0; k < (charts[j].length/5); k++){
                if(charts[j][k][1] === true && charts[j][k+5][1] === true && charts[j][k+10][1] === true && charts[j][k+15][1] === true && charts[j][k+20][1] === true){
                    console.log(charts[j])
                    let sum = 0;
                    for(let p = 0; p < charts[j].length; p++){
                        if(charts[j][p][1] === false){

                            sum+= parseInt(charts[j][p][0]);
                        }
                    }
                    console.log(sum);
                    console.log(nums[i]);
                    return console.log(sum*nums[i]);
                }
            }
        }
    }
}
function part2(){
    let nums = inputArray[0].split(",");

    let charts = [];

    let index = 2;

    for(let i = 0; i < ((inputArray.length -2) / 6); i++){
        let card = [];
        for(let j = 0; j < 5; j++){
            let line = inputArray[index++];
            for(let k = 0; k < 5; k++){
                card.push([line.substring(k * 3, k * 3 + 2).replace(" ", ""), false]);
            }
        }
        index++;
        charts.push(card);
    }

    for (let i = 0; i < nums.length; i++){
        for(let j = 0; j < charts.length; j++){
            for(let k = 0; k < charts[j].length; k++){
                if(charts[j][k][0] === nums[i]){
                    charts[j][k][1] = true
                }
            }
        }


        //loop all cards
        for(let j = 0; j < charts.length; j++){
            deleteIndexes = [];
            if(charts.length > 1){
                //loop all rows
                for(let k = 0; k < (charts[j].length/5); k++){
                    if(charts[j][k*5][1] === true && charts[j][k*5+1][1] === true && charts[j][k*5+2][1] === true && charts[j][k*5+3][1] === true && charts[j][k*5+4][1] === true){
                        deleteIndexes.push(charts.indexOf(charts[j]));
                        console.log(deleteIndexes)
                    }
                }

                //loop all colums
                for(let k = 0; k < (charts[j].length/5); k++){
                    if(charts[j][k][1] === true && charts[j][k+5][1] === true && charts[j][k+10][1] === true && charts[j][k+15][1] === true && charts[j][k+20][1] === true){
                        deleteIndexes.push(charts.indexOf(charts[j]));
                    }
                }
                for (let a = 0; a < deleteIndexes.length; a++){
                    charts.splice(deleteIndexes[a], 1);
                }
            }
            else{
                console.log(charts);
                let sum = 0;
                for (let p = 0; p < charts[j].length; p++){
                    if(charts[j][p][1] === false){
                        sum += parseInt(charts[j][p][0]);
                    }
                }
                return console.log(sum*nums[i]);
            }

        }
    }
}


