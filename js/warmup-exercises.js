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

//
//
// function add(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(2, 2));
//
//
// function square(numToSqr) {
//         return numToSqr * numToSqr;
// }
// console.log(square(5));
//
//
//
//
// function sumOfSquares(a, b) {
//     var aSquared = square(a);
//     var bSquared = square(b);
//     return add(aSquared, bSquared);
// }
//
// console.log("3 squared + 2 squared = " + sumOfSquares(3,3));
//
//
// function getFizzBuzz(startingNum) {
//     if (startingNum % 3 === 0 && startingNum % 5 === 0) {
//         return "FIZZ BUZZ"
//     } else if (startingNum % 5 === 0) {
//         console.log("buzz");
//     } else if (startingNum % 3 === 0) {
//         console.log("fizz");
//     } else {
//         return "That ain't fizz"
//     }
// }
//
//
// console.log(getFizzBuzz(20));
//

// Array exercise

//var favoriteArtists = ['King George Strait', 'Cody Johnson', 'Tupac', 'Notorius BIG', 'Weird Al Yankovic'];
// console.log(favoriteArtists[0]);
// console.log(favoriteArtists[2]);
// console.log(favoriteArtists[4]);


// Iterating Arrays//

//for (let i = 0; i < favoriteArtists.length; i++) {
    // console.log(favoriteArtists[i])
// }
// Refactored version of original// 
//for (let i = favoriteArtists.length - 1; i >= 0; i--) {
    // console.log(favoriteArtists[i])
// }

//favoriteArtists.forEach(function (favoriteArtist) {
//    console.log(favoriteArtist)
//})


// function arrayToString(myArray) {
//     let canCatString = "";
//     for (let i = 0; i < myArray.length; i++) {
//         canCatString += myArray[i];
//     }
//     return canCatString;
// }
// console.log(arrayToString(["Me", "I", "You", "They"]));



// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
// Given the following array as an argument (do not define this array inside your function - pass it in as an argument)
 //var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c “roach” has no occurrances.
//
//     var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//     function removedAll(array, value) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== value(i)) {
//             return removedAll()
//         }
//     }
//     console.log(removedAll())
//     }
//
//

// var myCats = [
//     {
//         catName: "Fifi",
//         age: 5
//     },
//     {
//         catName: "Fluffy",
//         age: 3
//     },
//     {
//         catName: "Abby",
//         age: 7
//     }
// ];
//
// function getNthCat(cats, n) {
//     return cats[n]
// }
//
//
// // print out the cat at index 1
// console.log(getNthCat(myCats, 1));
//

// var greeting = "hello"
//
// function reverseString() {
//     return greeting.split("").reverse().join("");
// }
// console.log(reverseString('hello'));

// Write a function called findAverage that takes in an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75




function findAverage(grades) {

    let sum = 0;

    grades.forEach(function (grade) {
        sum = sum + grade;
    });

    return sum / grades.length

}
console.log(findAverage([95, 74, 94, 88]))