"use strict";

let counter = 0;
let num = 1;

while (counter <= 15) {
    num = num * 2
    counter++
    console.log(num);
}

//Do-While loop Exercise//


function freeToGo() {
    let allCones = Math.floor(Math.random() * 50) + 50;
    let conesSold;
    do {
        conesSold = Math.floor(Math.random() * 5) + 1;
        console.log("You asked for " + conesSold + " ice cream cones");
        if (conesSold > allCones){
            console.log(`cannot sell you ${conesSold} - I only have ${allCones}` );
        }
        allCones -= conesSold;
        console.log("There are " + allCones + " remaining");

    }while (allCones > 0)
    console.log(allCones);
}

freeToGo()

