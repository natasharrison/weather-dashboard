var formEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");

// api fetch 
var getWeather = function (city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65c9a13b026d55f0a4cc05734545fc57`).then(function(response) {
        console.log(response);
        return response.json()
})
        .then(function(data){
            console.log(data);
        }) 
};

// handle form submission of city search 
var formSubmitHandler = function(event){
    event.preventDefault();

    // get value from input element 
    var city = cityInputEl.value.trim();

    if (city){
        getWeather(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city name");
    }
};

// display current weather 
// var displayWeather = function()


formEl.addEventListener("submit", formSubmitHandler);