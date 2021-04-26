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

    document.getElementById("date").innerHTML = data.dt;
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
    // forecast dates
    document.getElementById("day-one").innerHTML = data.list[0].dt
    document.getElementById("day-two").innerHTML = data.list[1].dt
    document.getElementById("day-three").innerHTML = data.list[2].dt
    document.getElementById("day-four").innerHTML = data.list[3].dt
    document.getElementById("day-five").innerHTML = data.list[4].dt
    // forecast icon
    document.getElementById("one-icon").innerHTML = data.list[0].weather
    document.getElementById("two-icon").innerHTML = data.list[1].weather
    document.getElementById("three-icon").innerHTML = data.list[2].weather
    document.getElementById("four-icon").innerHTML = data.list[3].weather
    document.getElementById("five-icon").innerHTML = data.list[4].weather
    // forecast temp
    document.getElementById("one-temp").innerHTML = data.list[0].main.temp
    document.getElementById("two-temp").innerHTML = data.list[1].main.temp
    document.getElementById("three-temp").innerHTML = data.list[2].main.temp
    document.getElementById("four-temp").innerHTML = data.list[3].main.temp
    document.getElementById("five-temp").innerHTML = data.list[4].main.temp
    // forecast wind
    document.getElementById("one-wind").innerHTML = data.list[0].wind.speed
    document.getElementById("two-wind").innerHTML = data.list[1].wind.speed
    document.getElementById("three-wind").innerHTML = data.list[2].wind.speed
    document.getElementById("four-wind").innerHTML = data.list[3].wind.speed
    document.getElementById("five-wind").innerHTML = data.list[4].wind.speed
    // forecast humidity
    document.getElementById("one-humid").innerHTML = data.list[0].main.humidity
    document.getElementById("two-humid").innerHTML = data.list[1].main.humidity
    document.getElementById("three-humid").innerHTML = data.list[2].main.humidity
    document.getElementById("four-humid").innerHTML = data.list[3].main.humidity
    document.getElementById("five-humid").innerHTML = data.list[4].main.humidity

};

// get the image from the website by creating image variable
// var imageEl = 
// Image = "src" "http://"


formEl.addEventListener("submit", formSubmitHandler);