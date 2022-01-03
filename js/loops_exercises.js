"use strict";

// function getPassword() {
//     let userInput = prompt("Please enter your password." );
//     let correctPassword = "Texas";
//
//         while (userInput !== correctPassword) {
//             alert("That is an incorrect password")
//             userInput = prompt("Please try again")
//         }
//         alert("That's correct!")
// }
// getPassword();

// Meaning of life exercises //

// function getMeaningOfLife(meaningFulNum) {
//     let counter = 0
//     if (!isNaN(meaningFulNum)) {
//
//         while (counter != meaningFulNum) {
//             counter++
//         }
//         console.log("The meaning of life, the universe, and everything is " + meaningFulNum)
//     }
//     if (meaningFulNum == 42) {
//         console.log("Did you bring your towel?")
//     }
// }
//     getMeaningOfLife(8);
//
//     getMeaningOfLife("s");
//     getMeaningOfLife(42);
//     getMeaningOfLife("42");
                        //*** Do While Loop exercises ***//
// let someCondition = 10;
//
// do {
//     console.log("the loop ran!");
//     someCondition++;
// } while (someCondition < 20)


function getToWork() {
    let gasInTank = .1;

    do {
        //drive to work
        console.log("Let's go to work!");
        gasInTank -= .25;
        console.log("You have " + gasInTank + " remaining!");
    }while (gasInTank > .25)
    console.log("Time to fill up the tank!")
}
getToWork()

function freeToGo() {
    var allCones = Math.floor(Math.random() * 50) + 50;

    do {
        console.log("Miller Time");
        conesSold -= Math.floor(Math.random() * 5) + 1;
        console.log("You have "

    }


}






