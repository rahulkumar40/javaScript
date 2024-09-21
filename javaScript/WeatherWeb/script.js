
const inputBox = document.querySelector('.input-box');

const searchBtn = document.querySelector('#searchBtn');

// weather img 
const weatherImg = document.querySelector("#weater-img")
// console.log(weatherImg);

// element of temprature.
const temprature = document.getElementById('temprature');
const tempDesc = document.getElementById('tempDesc');

const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-spedd');

const errorBox = document.querySelector('.location-not-found');

async function checkWeather(city){
    const api_key = "0dbc46a3724d3c1a13d13e95ea2a4401";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_Data = await fetch(`${url}`).then(response => response.json());

    // console.log(weather_Data);

    if(weather_Data.cod === `404`){
        document.querySelector('.weather-body').style.display = "none";
        errorBox.style.display = "flex";
        return ;
    }else{
        document.querySelector('.weather-body').style.display = "flex";
        errorBox.style.display = "none";
    }

    // weatherImg.src = `${weather_Data.}`
    // tempratur of app 
    temprature.innerHTML = `${Math.round(weather_Data.main.temp - 273.15)}°C `;

    tempDesc.innerHTML = `${weather_Data.weather[0].description}`;

    humidity.innerHTML = `${weather_Data.main.humidity}`;

    wind_speed.innerHTML = `${weather_Data.wind.speed}`;



    switch(weather_Data.weather[0].main){
        case 'Clouds':
            weatherImg.src = `/img/cloud.png`;
            break;
        case 'Clear':
            weatherImg.src = `/img/clear.png`;
            break;
        case 'Rain':
            weatherImg.src = `/img/rain.png`;
            break;
        case 'Mist':
            weatherImg.src = `/img/mist.png`;
            break;
        case 'Snow':
            weatherImg.src = `/img/snow.png`;
            break;
    }
}

searchBtn.addEventListener("click", ()=>{
    // console.log(inputBox.value);
    checkWeather(inputBox.value);
})
inputBox.addEventListener('keydown', (event)=> {
    if (event.key === 'Enter') { // Check if the 'Enter' key is pressed
        checkWeather(inputBox.value);
    }
});