

// paramater for this AirQuality API is the location (ex: dallas)
// has api key 6a49512e98dba5f1b7cdbbc8d31969bccf003b38

// import { createClient } from 'pexels';

// const client = createClient('563492ad6f91700001000001aabe8c55adec49e8a751c28d2eb90dff');

// function photoSearch(search){
//     const query = search;
//     const cardPhoto = document.getElementById("cardPhoto") 
//     cardPhoto.innerHTML = client.photos.search({ query, per_page: 1 }).then(photos => { }); 
// }


async function airQuality(search) {
    const response = await fetch(`https://api.waqi.info/feed/${search}/?token=6a49512e98dba5f1b7cdbbc8d31969bccf003b38`)
    const data = await response.json()
    const airStatus = data.status
    const moreAirInfo = data.data.city.url
    console.log(airStatus, moreAirInfo)
    const airQualityElement = document.getElementById("airQualityResults");
    airQualityElement.innerHTML = `<p>Your current air quality is: ${airStatus}.</p>
    <br>
    <p>Want more info on your city's air quality? <a href=${moreAirInfo}>CLICK HERE</a></p>`
    }  

let cityAir = [];
// weather api 
// my api key: 398d9f85036ab66f822fd82148535c81
async function fetchWeather(search) {
    try {
        const results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=398d9f85036ab66f822fd82148535c81&units=imperial`);
        const weatherData = await results.json();
        console.log(weatherData);
        //now make const to create the data that you want to pull from API. It will always be above const.objectname
        const cityName = weatherData.name;
        const currentTemp = weatherData.main.temp;
        const feelsLike = weatherData.main.feels_like;
        const weatherDescription = weatherData.weather[0].description;
        console.log({ cityName, currentTemp, feelsLike, weatherDescription });
        const searchResultElement = document.getElementById("weatherResults")



        searchResultElement.innerHTML = `<p>The current temperature in ${cityName} is ${currentTemp} degrees.</p>
        <br>
        <p>The  current weather conditions are ${weatherDescription}.</p>
        <br>
        <p>It currently fells like ${feelsLike} degrees outside.</p>
        <br>
        `
        let citieslistJSON = localStorage.getItem('favoriteCities');
        let favoriteCities = JSON.parse(citieslistJSON);
        const addCities = async () => {
            await favoriteCities.push(cityName, weatherDescription, feelsLike);
            console.log(favoriteCities);
        }
        citieslistJSON = JSON.stringify(favoriteCities);
        localStorage.setItem('favoriteCities', citieslistJSON);
        addCities();
        //in above console.log we are using curly brackets in the () so it shows as an object you don't have to do this though.
    } catch (e) {
        console.log("Something went wrong fetching the weather API", e)
    }

}
let favoriteCities = [];


const myForm = document.getElementById('search-form');

myForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const searchString = document.getElementById('searchBar').value;
    const photo = document.getElementById("cardDisplay")
    photo.style.display = "block"
    fetchWeather(searchString);
    airQuality(searchString);
    // photoSearch(searchString);
})

