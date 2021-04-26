var formEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var currentCityEl = document.querySelector("#current-city");

// api fetch for current weather
var getCurrentWeather = function (city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=65c9a13b026d55f0a4cc05734545fc57`).then(function(response) {
        console.log(response);
        return response.json()
})
        .then(function(data){
            console.log(data);
            displayCurrentWeather(data);
        }) 
};

// handle form submission of city search 
var formSubmitHandler = function(event){
    event.preventDefault();

    // get value from input element 
    var city = cityInputEl.value.trim();

    if (city){
        getCurrentWeather(city);
        getForecastWeather(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city name");
    }
};

// display current weather 
var displayCurrentWeather = function(data){
    currentCityEl.textContent = data.name;
    document.getElementById("icon").innerHTML = data.weather[0].icon;
    document.getElementById("temp").innerHTML = data.main.temp;
    document.getElementById("wind").innerHTML = data.wind.speed;
    document.getElementById("humidity").innerHTML = data.main.humidity;
};


// api fetch for forecast
var getForecastWeather = function (city) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&units=imperial&appid=65c9a13b026d55f0a4cc05734545fc57`)
    .then(function(response) {
        console.log(response);
        return response.json()
})
        .then(function(data){
            console.log(data);
            displayForecast(data);
        }) 
};

// display Forecast 
var displayForecast = function(data){
    document.getElementById("day-one").innerHTML = data.list[0].dt
};

// get the image from the website by creating image variable
// var imageEl = 
// Image = "src" "http://"


formEl.addEventListener("submit", formSubmitHandler);