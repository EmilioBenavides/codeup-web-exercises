var myVar = "bob";

(function () {
"use strict;"


window.onload = function () {
    alert( 'The page has finished loading!' );
}
// vanilla js equivalent to to add event listener for DOM ready/load
// document .addEventListener("DOMContentLoaded", function() {
// alert('DOM is ready');

// You should declare your function definition outside the DOMLoadedReady code or top-level js files code


    doSomething(1);

function doSomething(aVariable) {
    console.log(aVariable);
}


$(document).ready(function() {
    //alert( 'the dom has finished loading!')

    // majority i=od js work goes here
});

//console.log($.fn.jquery);

})();