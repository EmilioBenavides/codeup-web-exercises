
$('.dbl-click-box').dblclick(function () {
    alert('Hello there!')
})
function toggleMyClass() {
    $('body').toggleClass('dark-mode')
}

$('#dark-mode-btn').click(toggleMyClass)

/*When the cursor hovers over the span with the id of uppercase (<span id="uppercase">),
 take the text of that span and display it, in lowercase, in the span with the id of
 lowercase (<span id="lowercase">).*/

$('#uppercase').hover(function () {
    $('#lowercase').text($(this).text().toLowerCase())
})

document.querySelector('[data-em="1"]').style.color = 'blue';

$('[data-em="2"]').css("color", "red")
let dataColor2 = $('[data-em="2"]').css("color") // example of how to get a css value
console.log(dataColor2);


//The span with an id of counter should increment by one every second.
// When the user clicks on the button (<button id="list-chars-btn">), take any text the user has typed
// in the input field (<input id="characters">), and output each individual character as a separate
// list item within the unordered list (<ul id="characters-list">). Clicking the button multiple
// times should not append additional list items.
// When the user clicks on the button (<button id="clean-animal-list-btn">), the text of each list
// item that has a class (<li class="animal-list-item">) should be concatenated to the list item
// that immediately follows it.
// When hovering over the divs within the div with a class of hidden-letters, a letter will become
// visible in a span within the div being hovered over.