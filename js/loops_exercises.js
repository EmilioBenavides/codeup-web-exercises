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

function getMeaningOfLife(meaningFulNum) {
    let counter = 0
    if (!isNaN(meaningFulNum)) {

        while (counter != meaningFulNum) {
            counter++
        }
        console.log("The meaning of life, the universe, and everything is " + meaningFulNum)
    }
    if (meaningFulNum == 42) {
        console.log("Did you bring your towel?")
    }
}
    getMeaningOfLife(8);

    getMeaningOfLife("s");
    getMeaningOfLife(42);
    getMeaningOfLife("42");