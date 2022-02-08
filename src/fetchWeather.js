
import {cityName} from './index'

const getWeather = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=3c82b155ead16d1cbcce595fd592cdb2`, {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData);
        return weatherData;

     }
     
     catch (error) {
         const weatherData = {
            location: 'London',
            temperature: 5,
            humidity: 85,
            pressure: 1015,
            windDir: 17,
            windSpeed: 0.6,
            clouds: 'all',
            weatherDescript1: 'cloudy',
            weatherDescript2: 'rainy'
        };
        return weatherData;
     }
}

export {getWeather}