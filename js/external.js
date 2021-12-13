//console.log("Hello from external JavaScript!");

//alert("Welcome to my Website!");


//var favoriteColor = prompt("What is your favorite color?");

//alert("Great, " + favoriteColor + " is my favorite color too!");



//var littleMermaid = prompt("How long did you keep this the Little Mermaid?");
//var brotherBear = prompt("how long did you keep the movie Brotherbear?");
//var hercules = prompt("how long did you rent the movie Hercules?");
//var totalAmount = parseInt(littleMermaid) + parseInt(brotherBear) + parseInt(hercules);

//alert("Your total is $" + (totalAmount * 3));


//var google = prompt("How many hours did you work at Google?");
//var amazon =  prompt("How many hours did you work at Amazon?");
//var facebook = prompt("How many hours did you work at Facebook?");
//var totalPayout = parseInt(google * 400) + parseInt(amazon * 380) + parseInt(facebook * 350);
//alert("Your total pay for the week is $" + (totalPayout));


// var classIsNotFull = prompt('This class in not full. Would you like to join?');
//
// let noScheduleConflicts = null;
// if (classIsNotFull === 'yes') {
//     noScheduleConflicts = prompt('This class is available these days, does that work for you?');
// }
//
// if (classIsNotFull === 'no') alert('Thank you! Have a good day!');
// if (classIsNotFull === 'yes' && noScheduleConflicts === 'no') alert('Thank you! Have a good day!');
// if (classIsNotFull === 'yes' && noScheduleConflicts === 'yes') alert('Congratulations you are now enrolled');

var premiumMember = prompt("Are you a premium member?");
var productAmount = prompt("How many items do you have?");
var offerValid = prompt("Is your offer valid?");
if (offerValid === 'no' || (productAmount < 2 && offerValid === 'yes') || (premiumMember === 'no' && offerValid === 'yes')) alert("Discount cannot be applied");
if (offerValid === 'yes' && (productAmount > 2 || premiumMember === 'yes')) alert("Discount has been applied");

