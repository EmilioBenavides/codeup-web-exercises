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

// function findAverage(grades) {
//
//     let sum = 0;
//
//     grades.forEach(function (grade) {
//         sum = sum + grade;
//     });
//
//     return sum / grades.length
//
// }
// console.log(findAverage([95, 74, 94, 88]))

// function sumOfSquares(a, b) {
//     return (a * a) + (b * b);
// }
// console.log(sumOfSquares(2, 3));
//
// var firstStg = "";
// var secondStg = "";
//
// function whichStringIsLonger(firstStg, secondStg) {
//
//     if (typeof firstStg !== "string" || typeof secondStg !== "string") {
//         return false;
//     }
//     if (firstStg.length > secondStg.length) {
//         return "first";
//     }
//     if (secondStg.length > firstStg.length) {
//         return "second";
//     }
//             return "neither"
//         }
//
// console.log(whichStringIsLonger("hello", "hello there"));
// console.log(whichStringIsLonger(123, "lol"));

//Create a function that returns the remainder of two numbers
//
// function total(a,b) {
//     return a - b;
// }
// console.log(total(8,5));

// The name of the function will never go into the body of the function
// Everything in between the curly braces is the body of the  function
// The function name will alaways be outside the body of the function

//Create a function that returns the type of the argument or 'blank' if the argument is empty
// typeReturn('Hello') //string
// typeReturn(3)//number
// typeReturn(" ") //blank

// function verify (str) {   //The str is the variable for the function
//     if (str === " ") {
//         return "blank";
//     } else {
//        return typeof str;
//     }
// }
// console.log(verify('Hello')); //string // The hello is the argument and becomes the variable
// console.log(verify(3));//number
// console.log(verify(" ")); //blank

// How to find the length of a string

// function myString (stri) {
//     return stri.length
// }
// console.log(myString("hello"));

//create a function that will take a float and return (IN STRING FORMAT) the amount formatting in dollars and cents.
// 3 needs to become $3.00
// 3.1 needs to become $3.10

// function dollarString (x) {
//     return "$" + x.toFixed(2); // The to.Fixed() method will go to the specified decimal number ex (2)
// }
// console.log(dollarString(3));
// console.log(dollarString(3.1));

// Create a function named capitalize and returns the string with the first letter capitalized
// capitalize('hello')// Output: Hello

// function capitalize (veritas) {
//     return veritas.charAt(0).toUpperCase() + veritas.slice(1);
// }
// console.log(capitalize("hello"));

// function isBoolean (ray) {
//     if (typeof ray === 'boolean') {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isBoolean(0));
// console.log(isBoolean(false));
// console.log(typeof true);

// function isString (wes) {
//     if (typeof wes === 'string') {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isString("mary"));
// console.log(isString(99));

// function sumOfThreeNum (x,y,z) {
//     if(typeof  x !== "number"){
//         return false;
//     }
//     if(typeof y !== "number") {
//         return false;
//     }
//     if (typeof z !== "number") {
//         return false;
//     }
//     return x + y + z;
// }
// console.log(sumOfThreeNum(1,2,3));
// console.log(sumOfThreeNum(-10, 3, "sou"));
//
// function convertInchesToCentimeters(p) {
//     if (typeof p !== "number") {
//         return false;
//     } else{
//         return p * 2.54;
//     }
// }
// console.log(convertInchesToCentimeters(5));
// console.log(convertInchesToCentimeters("run"));
// console.log(convertInchesToCentimeters(20));
//
// function upperCase(eString) {
//     if (typeof eString !== "string") {
//         return false;
//     }
//     return eString.toUpperCase();
//
//     var parsedVal = parseInt(eString);
//
//     if (typeof parsedVal === "number") {
//         return eString;
//     }
//
// }
// console.log(upperCase("hello"));
// console.log(upperCase("you"));
// console.log(upperCase(123));
// console.log(upperCase("123"));

//
// Question 1:
// function lowerCase(aString) {
//     if (typeof aString !== "string") {
//         return false;
//     }
//     return aString.toLowerCase();
// }
//
// console.log(lowerCase("hello From Codeup"));
// console.log(lowerCase(123));
// console.log(lowerCase(-10));
//
// Question 2:
//
// function subtract(a, b) {
//     if (typeof a !== "number") {
//         return false;
//     }
//     if (typeof b !== "number") {
//         return false;
//     }
//     return a - b;
// }
// console.log(subtract(3,1));
// console.log(subtract("10",2));
// console.log(subtract(-4,1));
//
// function multiplyBy2(x) {
//     if (typeof x !== "number") {
//         return false;
//     }
//     return x * 2;
//     var parsedVal = parseInt(x);
//
//     if (typeof parsedVal === "123") {
//         return x;
//     }
//
// }
//
//
// console.log(multiplyBy2(2));
// console.log(multiplyBy2("4"));
// console.log(multiplyBy2(null));
//
//
// function getLowestNumber(a,b,c) {
//     if (typeof a !== "number") {
//         return false;
//     }
//     if (typeof b !== "number") {
//         return false;
//     }
//     if (typeof c !== "number") {
//         return false;
//     }
//     if (a > highest) {
//         return a
//     }
//
// }
// console.log(getLowestNumber("1",3,2));
//
// function isEvenlyDivisable(t, y) {
//     if (y || t % 2 === 1) {
//         return true;
//     }
// }
//
// console.log(isEvenlyDivisable(100, 2));
//
// function inBetween(w, i, l) {
//     return ((w - i) * (w - l) <= 0);
// }
//
// console.log(inBetween(10, 0, 12));
//
//
// function replace(b, n, m) {
//     if (typeof b !== "string") {
//         return false;
//     }
//     return b + n;
// }
//
// console.log(replace("codedown", "down", "up"));
//
//
// function addStringLengths(o, dString) {
//     if (typeof o !== "string")
//         return false;
// }
//     if (typeof dString !== "string") {
//     return false;
// }
// console.log(addStringLengths(1,2));
//
//
// function convertHourToSec(hours) {
//
// }
//
// function calculateChange(totalPaid, totalCost) {
//     if (typeof totalPaid !== "number") {
//         return false;
//     }
//     if (typeof totalCost !== "number"){
//         return false
//     }
//     return "$" + (totalCost.toFixed(2) - totalPaid.toFixed(2));
// }
// console.log(calculateChange(7.50,1.50));
//
// Write a function called convertLowHighToObject that takes in a string  that represents the low and high temperature in this format '35, 42'
// (assuming low will always be the left value and high the right) and returns an object with the properties 'low' and 'high' with the values of
// those respective properties set to the corresponding values in the input string.
//     NOTE: the values in the object should be of the number type
// Example input: '35, 42'
// Example return: {low: 35, high: 42}
//
//
//
// function convertLowHighToObject(tempString) {
//     let tempArr = tempString.split(', ');
//     return {
//         low: parseInt(tempArr[0]),
//         high: parseInt(tempArr[1]),
//     }
// }
//
// console.log(convertLowHighToObject('35, 42'));

//ENTRY LEVEL INTERVIEW QUESTIONS
// function countDuplicates(String) {
//         //initialize object
//     let letterCounterObject = {};
//     //initialize starting count
//     let count = 1;
//     //traverse
//     for (let i =0; i < String.length; i++) {
//         if (!(String[i] in letterCounterObject)) {
//             letterCounterObject[String[i]] = count;
//         } else {
//             letterCounterObject[String[i]] = letterCounterObject[String[i]] + 1;
//         }
//     }
//     return letterCounterObject;
// }
//
// console.log(countDuplicates("adfgadfgadfgadfg"));

//
// Write a function called makePerson. It takes 2 arguments: personName and age.
//     personName must be at least 1 character long. age must be between 1 and 150.
// If either of the parameters is invalid, output an appropriate message to the console and return FALSE.
//     If both parameters are valid, return an object containing personName and age.
//     E.g.,
//     console.log(makePerson("Bob", 30)); // outputs {personName:"Bob", age:30}
// console.log(makePerson("", 30));
// outputs:
// Person name cannot be blank
// false

function makePerson(personName, personAge) {
    if (personName.length === 0) {
        console.log("Person name cannot be blank!");
        return false;
    }
    if (personAge <1 || personAge > 150) {
        console.log("age must be between 1 and 150!");
        return false;
    }
    return {
        personName,
        personAge
    };
}

console.log(makePerson("bob", 30))



