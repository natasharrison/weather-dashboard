var getWeather = function (data) {
    fetch("https://api.openweathermap.org/data/2.5/onecall").then(function(response) {
    response.json().then(function(data){
        console.log(data);
    });
});
};

getWeather();