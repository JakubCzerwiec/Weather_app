const tempBox = document.querySelector('.tempBox');
const humidityBox = document.querySelector('.humidityBox');
const pressureBox = document.querySelector('.pressureBox');

async function getWeather () {
       try {const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3c82b155ead16d1cbcce595fd592cdb2`, {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData);
        return weatherData;

        }
        
        catch (error) {
            console.log(error)
        }
}



getWeather ()

async function showTemp () {
    const data = await getWeather();
    let tempt = data.main.temp;
    tempBox.innerText = tempt;

    let hum = data.main.humidity;
    humidityBox.innerText = hum;

    let pressure = data.main.pressure;
    pressureBox.innerText = pressure;
}

showTemp()
