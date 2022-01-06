"use strict";


//* MINI EXERCISE 10 minutes ***
// Declare an array of two objects for movies
// that have the following member values:
// title (string)
// year released (int)
// rating (string)
// director (string)
// imdb rating (decimal)
// academy award win (boolean)
// Use imdb.com to look up the info or make up your own info
// write a printMovie function that takes a movie as a parameter and prints its info.
// call it with each of your array elements.
// write a printMovies function that takes an array as a parameter, iterates over the array, and calls printMovie on each of the array elements (edited)

let favMovie = [];
favMovie[0] = {

    title: "Willow",
    yearreleased: 1988,
    rating: "R",
    director: {
        firstName: "Ron",
        lastName: "Howard"
    },
    imdbrating: 7.3,
    myRating: 10,
    rate : function(rating){
        this.myRating = rating;
    }
    academyawardwining: false
};

favMovie[1] = {
    title: "Blade",
    yearreleased: 1998,
    rating: "R",
    director: {
        firstName: "Stephen",
        lastName:  "Norrington"
    },
    imdbrating: 7.1,
    rate : function(rating){
        this.myRating = rating;
        academyawardwining: false
    };

    function selectMovie(movieObject) {
    for (let i = 0; i < movieObject.length; i++) {
        console.log(movieObject[i]);
    }
}
selectMovie(favMovie);

favMovie.rat

// *** Continuing MINI EXERCISE until lunch ***
// Change the director member of your movies to an object
// with firstName and lastName members
// Make an array member for your movies called genres.
//     It is an array of string elements where each element
// is one of your movies’ genres from imdb.com
// and change your printMovie function
// please cupdate as you complete this ungraded practice exercise (edited)




// ** last part of MINI EXERCISE ***
// Add a rate(rating) function to each of your movie objects.
//     The function takes an int parameter called rating
// Modify rate(rating) to set a myRating property on that object
// modify printMovie to display myRating for each movie
// 15 minutes
