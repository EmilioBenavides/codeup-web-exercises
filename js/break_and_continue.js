"use strict";

let numToSkip = prompt("Please enter the number to skip")
//This is the prompt you should see when launched browser//

for (let i = 0; i <50; i++) {
    if (i === parseInt(numToSkip)) {
        //We parseInt the variable to convert it from string to a number//
        console.log("Yikes! Skipping number: " + numToSkip)
        //Also you could substitute I for numToSkip because when condition is met they have the same value//
        continue;
        //The continue is placed here to skip the next loop iteration//
    }
   if (i % 2 === 1) {
       console.log("here is an odd number: " + i);
   }
}
