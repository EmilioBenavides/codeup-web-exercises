"use strict";
$.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly&appid=${EMILIO_WEATHER_APPID}&units=imperial`)
    .done(function (data) {
        for (let i = 0; i < 5; i++) {
            let html = "";
            html += `<div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${data.daily[i].temp.min}°F / ${data.daily[i].temp.max}°F <img src="http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png"</li>
    
    <li class="list-group-item">Description: ${data.daily[i].weather[0].description} Humidity: ${data.daily[i].humidity}</li>
    <li class="list-group-item">${data.daily[i].wind_speed}</li>
    <li class="list-group-item">Pressure: ${data.daily[i].pressure}</li>
  </ul>
</div>`
            $("#weather-card").append(html)
            console.log(data.daily[i].temp.min);
        } // Will return low temp for the day
    // console.log(data.timezone); will return current timezone
    // console.log(data.alerts);  will return danger conditions
    //  console.log(data.current.feels_like); will return "feels like temp"
    //  console.log(data.current.sunrise);
    // console.log(data.current.sunset); will return sunset info
    console.log(data);
})