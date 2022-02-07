const cityInput = document.querySelector('.cityInput');
const cityForm = document.querySelector('.cityForm');

const cityBox = document.querySelector('.cityBox');
const tempBox = document.querySelector('.tempBox');
const humidityBox = document.querySelector('.humidityBox');
const pressureBox = document.querySelector('.pressureBox');
const winndSpeedBox = document.querySelector('.winndSpeedBox');
const windDirBox = document.querySelector('.windDirBox');
const windDirSymbol = document.querySelector('.windDirSymbol');

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
    renderData ()
})





// Render function
async function renderData () {
    const data = await populateData();

    let city = data.location;
    cityBox.innerText = city;

    let tempt = data.temperature;
    tempBox.innerHTML = `Temperature: ${tempt} &degC`;

    let hum = data.humidity;
    humidityBox.innerHTML = `Humidity: ${hum} %`;

    let pressure = data.pressure;
    pressureBox.innerHTML = `Pressure: ${pressure} hPa`;

    let windSpeed = data.windSpeed;
    winndSpeedBox.innerHTML = `Wind speed: ${windSpeed} m/s`;

    let windDir = data.windDir;
    windDirBox.innerHTML = `<img src='img/arrow.png'>`;
    windDirBox.style = `transform: rotate(${windDir}deg)`;
    
    // Function to show wind direction in symbol "direction of the world"
    let windLetter =  (x) => {

        if (x >= 0 && x < 22.5) {
            windDirSymbol.innerText = 'N'
        } else if (x > 22.5 && x < 67.5) {
            windDirSymbol.innerText = 'NE'
        } else if (x > 67.5 && x < 112.5) {
            windDirSymbol.innerText = 'E'
        } else if (x > 112.5 && x < 157.5) {
            windDirSymbol.innerText = 'SE'
        } else if (x > 157.5 && x < 202.5) {
            windDirSymbol.innerText = 'S'
        } else if (x > 202.5 && x < 247.5) {
            windDirSymbol.innerText = 'Sw'
        } else if (x > 247.5 && x < 292.5) {
            windDirSymbol.innerHTML = 'W'
        } else if (x > 292.5 && x < 337.5) {
            windDirSymbol.innerText = 'NW'
        } else if (x > 337.5 && x < 361) {
            windDirSymbol.innerText = 'N'
        } 
    }; 

    
    windLetter(data.windDir);
}


