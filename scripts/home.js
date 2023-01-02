// paramater for this AirQuality API is the location (ex: dallas)
// has api key 6a49512e98dba5f1b7cdbbc8d31969bccf003b38
async function airQuality(){
    const response = await fetch('https://api.waqi.info/feed/dallas/?token=6a49512e98dba5f1b7cdbbc8d31969bccf003b38')
    const data = await response.json()
    const airStatus = data.status
    const moreAirInfo = data.data.city.url
    console.log(airStatus, moreAirInfo)
    const airQualityElement = document.getElementById("airQuality");
    const moreAirInfoElement = document.getElementById("moreInfo")
    airQualityElement.innerHTML = `<p>Your current air quality is: ${airStatus}.</p>`
    moreAirInfoElement.innerHTML = `<p>Want more info on your city's air quality? <a href=${moreAirInfo}>CLICK HERE</a></p>`
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
        const feelsLike= weatherData.main.feels_like;
        const weatherDescription= weatherData.weather[0].description;
        console.log({cityName, currentTemp, feelsLike, weatherDescription});
        const weatherElement= document.getElementById("weather");
        const feelsLikeElement= document.getElementById("feels");
        const conditionsELement= document.getElementById("conditions");
        weatherElement.innerHTML = `<p>The current temperature in ${cityName} is ${currentTemp} degrees.</p>`
        conditionsELement.innerHTML = `The  current weather conditions are ${weatherDescription}.`
        feelsLikeElement.innerHTML = `<p>It currently fells like ${feelsLike} degrees outside.</p>`
        //in above console.log we are using curly brackets in the () so it shows as an object you don't have to do this though.
    } catch (e) {
        console.log("Something went wrong fetching the weather API", e)
    }
}

fetchWeather();

// The below is a possible additional API I want to use if I have time. Just to add an image that populates per the city's weatherDescription
// I am not understanding how to fetch this API because the header for the API Key is an authorization header.
// I can pull this properly in POSTMAN, but when I am trying to fetch it here..  Iam getting stuck.
// The below code commented out is per the API Documentation.


// Pexels API Key: 563492ad6f91700001000001aabe8c55adec49e8a751c28d2eb90dff
// what I think the url should be: https://api.pexels.com/v1/search?query=${weatherDescription}

// import { createClient } from 'pexels';

// const client = createClient('563492ad6f91700001000001aabe8c55adec49e8a751c28d2eb90dff');
// const query = 'cloudy';

// client.photos.search({ query, per_page: 1 }).then(photos => {...});