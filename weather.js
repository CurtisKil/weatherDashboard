// e09019bc4f5bd17c30de82bb2f3a2a00
$(document).ready(function() { 
  $("#search").on("click", function () {
    var cityValue = $("#city").val();
    const cachedCity = window.localStorage.getItem(cityValue)
    if(cachedCity) {
// TODO: Implement displaying cached cities or cities already searched
      console.log("Hit local storage for old city")
      displayCity(cityValue, JSON.parse(cachedCity))
    } else {
      weatherSearch(cityValue);
    }
  })

  function displayCity(city, weatherData){
    $("#dataCity").text(city);
    $("#dataIcon").attr("src", weatherData.icon);
    $("#dataTemp").text(weatherData.temp);
    $("#dataHumidity").text(weatherData.humidity);
    $("#dataSpeed").text(weatherData.windSpeed);
  }
  function weatherSearch(city){
    $.get( "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=e09019bc4f5bd17c30de82bb2f3a2a00&units=imperial", function( data ) {
    // Data: temp, humidty, wind speed, uv index
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    
    const icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    const weatherData = {
      temp: temp,
      humidity: humidity,
      windSpeed: windSpeed,
      icon: icon
    };
    console.log("hit API for new city")
    window.localStorage.setItem(city, JSON.stringify(weatherData))
    displayCity(city, weatherData);
   

   
// call function that updates uv index value to screen
// then for 5 day forcast
// add more html for this
  });

// UV Data

  }
})


