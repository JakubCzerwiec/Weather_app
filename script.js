const cityInput = document.querySelector('.cityInput');
const cityForm = document.querySelector('.cityForm');

const cityBox = document.querySelector('.cityBox');
const tempBox = document.querySelector('.tempBox');
const humidityBox = document.querySelector('.humidityBox');
const pressureBox = document.querySelector('.pressureBox');
const winndSpeedBox = document.querySelector('.winndSpeedBox');
const windDirBox = document.querySelector('.windDirBox');

let cityName;




// Fetching data
async function getWeather () {
       try {const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=3c82b155ead16d1cbcce595fd592cdb2`, {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData);
        return weatherData;

        }
        
        catch (error) {
            console.log(error)
        }
}

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3c82b155ead16d1cbcce595fd592cdb2

// Creating object with data needed and populating it with data from fetch
async function populateData () {
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

// populateData ()

// Handling input
cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    cityName = cityInput.value;
    populateData ();
    renderData ()
})





// Render function
async function renderData () {
    const data = await populateData();

    let city = data.location;
    cityBox.innerText = city;

    let tempt = data.temperature;
    tempBox.innerHTML = `Temperature: ${tempt} C`;

    let hum = data.humidity;
    humidityBox.innerHTML = `Humidity: ${hum} %`;

    let pressure = data.pressure;
    pressureBox.innerHTML = `Pressure: ${pressure} hPa`;

    let windSpeed = data.windSpeed;
    winndSpeedBox.innerHTML = `Wind speed: ${windSpeed} m/s`;

    let windDir = data.windDir;
    windDirBox.innerHTML = `<img src='img/arrow.png'>`;
    windDirBox.style = `transform: rotate(${windDir}deg)`
}


