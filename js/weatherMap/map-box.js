"use strict";
mapboxgl.accessToken = EMILIO_MAP_ID;
let map = initMap()   //Put map into a variable so you can use it throughout JS file
let marker;
map.on("click", (event) => {setMarker(event)})

// This sec is for the functionality for accessing or updating map data

function getMarker(location) {
    return new mapboxgl.Marker()
        .setLngLat(location)
        .addTo(map);
}

function getPopUp(htmlDescription) {
    return new mapboxgl.Popup()
        .setHTML(htmlDescription)
}

function setMarker(event) {
    //console.log(event);

    if (marker) {
        marker.remove();
    }
    //console.log(event.lngLat.lat); // this will return the latitude
    marker = getMarker([event.lngLat.lng, event.lngLat.lat])
}

function initMap() {
    let map;
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        zoom: 10,
        center: [-99.786171, 29.20984]
    });
    return map;
}
