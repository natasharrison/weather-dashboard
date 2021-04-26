var formEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var currentCityEl = document.querySelector("#current-city");

// api fetch for current weather
var getCurrentWeather = function (city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=65c9a13b026d55f0a4cc05734545fc57`).then(function(response) {
        // console.log(response);
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

    localStorage.setItem("city", JSON.stringify(city));
};

// display current weather 
var displayCurrentWeather = function(data){
    currentCityEl.textContent = data.name;
    var currentDate = data.dt
    currentDate = moment().format("MM/DD/YY");

    document.getElementById("date").innerHTML = currentDate;
    document.getElementById("icon").innerHTML = data.weather[0].icon;
    document.getElementById("temp").innerHTML = data.main.temp;
    document.getElementById("wind").innerHTML = data.wind.speed;
    document.getElementById("humidity").innerHTML = data.main.humidity;
};


// api fetch for forecast
var getForecastWeather = function (city) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&units=imperial&appid=65c9a13b026d55f0a4cc05734545fc57`)
    .then(function(response) {
        // console.log(response);
        return response.json()
})
        .then(function(data){
            console.log(data);
            displayForecast(data);
        }) 
};

// display Forecast 
var displayForecast = function(data){
    var forecastDateOne= data.list[0].dt
    forecastDateOne = moment().format("MM/DD/YY");

    var forecastDateTwo= data.list[1].dt
    forecastDateTwo = moment().format("MM/DD/YY");

    var forecastDateThree= data.list[2].dt
    forecastDateThree = moment().format("MM/DD/YY");

    var forecastDateFour= data.list[3].dt
    forecastDateFour = moment().format("MM/DD/YY");

    var forecastDateFive= data.list[4].dt
    forecastDateFive = moment().format("MM/DD/YY");

    // forecast dates
    document.getElementById("day-one").innerHTML = forecastDateOne
    document.getElementById("day-two").innerHTML = forecastDateTwo
    document.getElementById("day-three").innerHTML = forecastDateThree
    document.getElementById("day-four").innerHTML = forecastDateFour
    document.getElementById("day-five").innerHTML = forecastDateFive
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

// local storage
var saveCitySearch = function(){
    localStorage.setItem("city", JSON.stringify(city));
};

// display local storage 
var loadCitySearch = function(){
    city = JSON.parse(localStorage.getItem("city"))
};

saveCitySearch();
loadCitySearch();
formEl.addEventListener("submit", formSubmitHandler);

// REMAINING ISSUES
// get the icon image from the website by creating image variable
// find uv index and display on the page with color coding based on conditions
// display local storage 
// create buttons for stored search cities
// refactor