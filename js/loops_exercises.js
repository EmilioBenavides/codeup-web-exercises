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


// function getToWork() {
//     let gasInTank = .1;
//
//     do {
//         //drive to work
//         console.log("Let's go to work!");
//         gasInTank -= .25;
//         console.log("You have " + gasInTank + " remaining!");
//     }while (gasInTank > .25)
//     console.log("Time to fill up the tank!")
// }
// getToWork()


// function freeToGo() {
//     let allCones = Math.floor(Math.random() * 50) + 50;
//     let conesSold;
//     do {
//         conesSold = Math.floor(Math.random() * 5) + 1;
//         console.log("You asked for " + conesSold + " ice cream cones");
//         if (conesSold > allCones){
//             console.log(`cannot sell you ${conesSold} - I only have ${allCones}` );
//         }
//         allCones -= conesSold;
//         console.log("There are " + allCones + " remaining");
//
//     }while (allCones > 0)
//     console.log(allCones);
// }
//
// freeToGo()

//
// function getPassword() {
//     var answer = "howdy";
//     var guess = "howdy";
//     while(guess !== answer) {
//         guess = prompt("enter your password: ");
//     };
//     console.log("done");
// }
//
// function getPassword2() {
//     var answer = "howdy";
//     var guess = "howdy";
//     do {
//         guess = prompt("enter your password");
//     } while (guess !== answer);
//     console.log("done");
// }
//
// getPassword2()
//

//
// function petThosDoggos(numberOfDoggos) {
//
//     for (let i = 0; i <= numberOfDoggos; i++){
//         console.log(`${i}: ** Pats that a good boi!**`);
//     }
// }

// petThosDoggos(42)

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*
//
// function inputNum(outputNum) {
//     for (let a = 0; a < outputNum; a++){
//         if (a % 2 === 1){
//          console.log(a);
//         }
//     }
// }
// inputNum(5)
//
// // TODO: MINI EXERCISE
// //      Write a function which uses a for-loop and
// //      -> accepts the number of times to iterate as a parameter
// //      -> logs "This is an even iteration" on the evens
// //      -> logs "This is an odd iteration" on the odds
//
// function inputNum2(outputNum) {
//     for (let a = 0;a < outputNum; a++){
//         if(b % 2 === 1) {
//             console.log(`${a} This is an odd number`);
//         } else {
//             console.log(`${a} this is an even number`)
//         }
//     }
// }
// miniExercise2(5)
// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password

var answer = "howdy";


function getPassword() {
    var guess = "";
    for {let i + 0; i < 3; i++) {
        guess = prompt("enter password");
        if(guess === answer) {
           break;
    }
    if(i === 2) {
        alert("no way jose");
    }
    alert("logged in");

getPassword();