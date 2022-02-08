import {getWeather} from './fetchWeather';

const populateData = async () => {
    const rawData = await getWeather ();

    const data = {
        location: rawData.name,
        temperature: Math.floor(rawData.main.temp - 273),
        humidity: rawData.main.humidity,
        pressure: rawData.main.pressure,
        windDir: rawData.wind.deg,
        windSpeed: rawData.wind.speed,
        clouds: rawData.clouds.all,
        weatherDescript1: rawData.weather[0].main,
        weatherDescript2: rawData.weather[0].description
    };

  
    console.log(data);
    return data;
}

export {populateData}