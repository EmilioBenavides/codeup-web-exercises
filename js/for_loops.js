"use strict";
// function petThosDoggos(numberOfDoggos) {
//
//     for (let i = 0; i <= numberOfDoggos; i++){
//         console.log(`${i}: ** Pats that a good boi!**`);
//     }
// }
// }

//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)//

// function showMultiplicationTable(numInput) {
//     //This loop will run through 10 because I was set to <= 10//
//     for (let i = 1; i <= 10; i++) {
//         //outputting multiplication table//
//         console.log(numInput + " x " + i + " = " +
//             (numInput * (i)));
//     }
// }
// showMultiplicationTable(7);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even//
//
// function randomEvenOrOdd() {
//
//     for (let i = 0; i < 10; i++) {
//         let randomNum = Math.floor(Math.random() * 180) + 20;
//         //To get the desired range you must subtract highest number from starting number//
//
//         if (randomNum % 2 === 0) {
//             console.log(`${randomNum} is even`);
//         } else {
//             console.log(`${randomNum} is odd`);
//         }
//     }
// }
// randomEvenOrOdd()

//Create a for loop that uses console.log to create the output shown below//

// function mirrorNum() {
//
//     for (let i = 0; i < 10; i++) {
//         let str = "";
//         for (let j = 0; j < i; j++) {
//             str += i;
//         }
//         console.log(str)
//     }
// }
// mirrorNum()

//Create a for loop that uses console.log to create the output shown below//

function reverseLoop() {
    for (let i = 100; i >= 5; i -= 5) {
        console.log(i);
    }
}

reverseLoop()







