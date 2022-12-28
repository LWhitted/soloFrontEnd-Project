// paramater for this AirQuality API is the location (ex: dallas)
// has api key 6a49512e98dba5f1b7cdbbc8d31969bccf003b38
async function airQuality(){
    const response = await fetch('https://api.waqi.info/feed/dallas/?token=6a49512e98dba5f1b7cdbbc8d31969bccf003b38')
    const data = await response.json()
    const airStatus = data.status
    console.log(airStatus)
    const airQualityElement = document.getElementById("airQuality");
    airQualityElement.innerHTML = `<p>Your current air quality is: ${airStatus}.</p>`
}
airQuality();

// weather api 
// my api key: 398d9f85036ab66f822fd82148535c81
async function fetchWeather() {
    try {
        const results = await fetch("https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=398d9f85036ab66f822fd82148535c81&units=imperial");
        const weatherData = await results.json();
        console.log(weatherData);
        //now make const to create the data that you want to pull from API. It will always be above const.objectname
        const cityName= weatherData.name;
        const currentTemp= weatherData.main.temp;
        const weatherDescription= weatherData.weather[0].description;
        console.log({cityName, currentTemp, weatherDescription});
        const weatherElement= document.getElementById("weather");
        weatherElement.innerHTML = `<p>The current temperature in ${cityName} is ${currentTemp}. It is ${weatherDescription}.</p>`
        //in above console.log we are using curly brackets in the () so it shows as an object you don't have to do this though.
    } catch (e) {
        console.log("Something went wrong fetching the weather API", e)
    }
}

fetchWeather();