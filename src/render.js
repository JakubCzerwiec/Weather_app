import {populateData} from './populateDataToObject';

import icon from './img/arrow.png';
const arrow = new Image();
arrow.src = icon;


const results = document.querySelector('.results');

let cityBox = document.createElement('div');
let tempBox = document.createElement('div');
let humidityBox = document.createElement('div');
let pressureBox = document.createElement('div');
let winndSpeedBox = document.createElement('div');
let windDirBox = document.createElement('div');
windDirBox.className = 'windDirBox';
let windDirSymbol = document.createElement('div');




let render = async () => {
    const data = await populateData();

    let city = data.location;
    cityBox.innerHTML = `City: ${city}`;

    let tempt = data.temperature;
    tempBox.innerHTML = `Temperature: ${tempt} &degC`;

    let hum = data.humidity;
    humidityBox.innerHTML = `Humidity: ${hum} %`;

    let pressure = data.pressure;
    pressureBox.innerHTML = `Pressure: ${pressure} hPa`;

    let windSpeed = data.windSpeed;
    winndSpeedBox.innerHTML = `Wind speed: ${windSpeed} m/s`;

    let windDir = data.windDir;
    windDirBox.appendChild(arrow);
    windDirBox.style = `transform: rotate(${windDir}deg)`;

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




    results.append(cityBox, tempBox, humidityBox, pressureBox, winndSpeedBox, windDirBox, windDirSymbol);
}

export {render}