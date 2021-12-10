let creditScore = 534;
let cashOnHand = 2000;

if (creditScore >= 680 && cashOnHand >=4000) {
    console.log("your credit is approved, 5000 is required");
} else if (cashOnHand >=10000){
    console.log("Sorry credit did not pass, you will need at least 10k down ");
}else {
    console.log("you are not approved")
}


