"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];


// function analyzeColor1(color) {
//     if (color === "blue") {
//         return "blue is the color of the sky";
//     }
//     if (color === "red") {
//         return "red is the color of love";
//     }
//     if (color === "green") {
//         return "green is the color of envy";
//     }
// }
// console.log(analyzeColor1("blue"));
// console.log(analyzeColor1("green"));
// console.log(analyzeColor1("red"));


/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// function analyzeColor(color) {
//     switch(color) {
//         case "blue":
//             alert("blue is the color of the sky");
//             break;
//         case "red":
//             alert("red is the color of love");
//             break;
//         default:
//             alert("I don't know that color");
//
//     }
// }
// var analyzeColor1 = prompt("what is the color of the sky");
// analyzeColor(analyzeColor1);
//

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//
// var color = prompt("Please enter a color")
//     analyzeColor(color);



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal (luckyNumber, totalAmount) {
    if (luckyNumber === 0) {
        return "No discount. total amount is $" + totalAmount;
    } else if (luckyNumber === 1) {
        return "Your total after discount is $" + (totalAmount - (totalAmount * .10));
    } else if (luckyNumber === 2) {
        return "Your total after discount is $" + (totalAmount - (totalAmount * .25));
    } else if (luckyNumber === 3) {
        return "Your total after discount is $" + (totalAmount - (totalAmount * .35));
    } else if (luckyNumber === 4) {
        return "Your total after discount is $" + (totalAmount - (totalAmount * .50));
    } else if (luckyNumber === 5) {
        return "Your items are free";
    }

}
// console.log(calculateTotal(2, 100)); // returns 100
// console.log(calculateTotal(4, 100)); // returns 50
// console.log(calculateTotal(5, 100)); // returns 0


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 // Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
 console.log(luckyNumber);
var userInput = prompt("what is your bill?");
alert(calculateTotal(luckyNumber, userInput));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//
// Create a function called analyzeColor1 that takes a parameter called color
// In your function, use ONLY if statements to print the following:
//     “blue is the color of the sky” if the value of color is “blue”
// “red is the color of love” if the value of color is “red”
// “green is the color of envy” if the value of color is “green”
// “I don’t know that color” if the value of color is anything else
// HINT: use return in the conditional code blocks to prevent from printing multiple times for the same argument
// Add, commit, and push to GitHub.



