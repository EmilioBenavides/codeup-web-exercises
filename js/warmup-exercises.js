// let creditScore = 534;
// let cashOnHand = 2000;
//
// if (creditScore >= 680 && cashOnHand >=4000) {
//     console.log("your credit is approved, 5000 is required");
// } else if (cashOnHand >=10000){
//     console.log("Sorry credit did not pass, you will need at least 10k down ");
// }else {
//     console.log("you are not approved")
// }

// function isFive(x) {
//     if (x === 3) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log (isFive(3));

// Make a function named isMultipleOfThree that takes in an input and returns a boolean indicating whether or not the input is a multiple of three.

//
// let counter = 0;
//
// while(counter <= 25) {
//
//     if (counter % 2 === 0) {
//         console.log(counter);
//     }
//     counter++;
// }
// console.log(counter);

        // --------        Ramp Up Exercises 01-02-2022-----



function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 2));


function square(numToSqr) {
        return numToSqr * numToSqr;
}
console.log(square(5));




function sumOfSquares(a, b) {
    var aSquared = square(a);
    var bSquared = square(b);
    return add(aSquared, bSquared);
}

console.log("3 squared + 2 squared = " + sumOfSquares(3,3));


function getFizzBuzz(startingNum) {
    if (startingNum % 3 === 0 && startingNum % 5 === 0) {
        return "FIZZ BUZZ"
    } else if (startingNum % 5 === 0) {
        console.log("buzz");
    } else if (startingNum % 3 === 0) {
        console.log("fizz");
    }
}
console.log(getFizzBuzz(15));

