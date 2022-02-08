
import {cityName} from './index'

const getWeather = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=3c82b155ead16d1cbcce595fd592cdb2`, {mode: 'cors'});
        let weatherData = await response.json();
        console.log(weatherData);
        return weatherData;

     }
     
     catch (err) {

         let weatherData = {
            name: 'London',
            main: {
                temp: 283.6,
                humidity: 75,
                pressure: 1015
            },
            wind: {
                deg: 240,
                speed: 6.69
            },
            clouds: {
                clouds: 'all',
            },
            weather: [
                {
                    main: 'Clouds', 
                    description: 'overcast clouds'
                }
            ]
        };
        console.log(weatherData)
        return weatherData;
        
     }
}

export {getWeather}