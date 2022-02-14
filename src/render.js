import {populateData} from './populateDataToObject';

import icon from './img/arrow.png';
const arrow = new Image();
arrow.src = icon;

const label = document.querySelector('label')
const results = document.querySelector('.results');

let cityBox = document.createElement('div');
cityBox.className = 'cityBox';

let tempBox = document.createElement('div');
tempBox.className = 'tempBox';

let description1Box = document.createElement('div');
description1Box.className = ('description1Box');

let humidityBox = document.createElement('div');
humidityBox.className = 'humidityBox';

let pressureBox = document.createElement('div');
pressureBox.classList = 'pressureBox';

let cloudsBox = document.createElement('div');
cloudsBox.classList = 'cloudsBox';

let windSpeedBox = document.createElement('div');
windSpeedBox.classList = 'winndSpeedBox';

let windDirBox = document.createElement('div');
windDirBox.className = 'windDirBox';

let windDirSymbol = document.createElement('div');
windDirSymbol.classList = 'windDirSymbol';




let render = async () => {
    const data = await populateData();

    let city = data.location;
    cityBox.innerHTML = `${city}`;

    let tempt = data.temperature;
    tempBox.innerHTML = `${tempt}&degC`;

    let description1 = data.weatherDescript2;
    description1Box.innerHTML = `${description1}`;

    let hum = data.humidity;
    humidityBox.innerHTML = `Humidity: ${hum}%`;

    let pressure = data.pressure;
    pressureBox.innerHTML = `Pressure: ${pressure}hPa`;

    let clouds = data.clouds;
    cloudsBox.innerHTML = `Clouds: ${clouds}%`;

    let windBox = document.createElement('div');
    windBox.className = 'windBox';
    windBox.innerText = 'Wind:'
    
            let windSpeed = data.windSpeed;
            windSpeedBox.innerHTML = `${windSpeed}m/s`;
            windSpeedBox.className = 'windSpeedBox';

            let windDir = data.windDir;
            windDirBox.appendChild(arrow);
            windDirBox.firstChild.style = `transform: rotate(${windDir}deg)`;

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
                    windDirSymbol.innerText = 'SW'
                } else if (x > 247.5 && x < 292.5) {
                    windDirSymbol.innerHTML = 'W'
                } else if (x > 292.5 && x < 337.5) {
                    windDirSymbol.innerText = 'NW'
                } else if (x > 337.5 && x < 361) {
                    windDirSymbol.innerText = 'N'
                } 
            }; 

            
            windLetter(data.windDir);



    windBox.append(windDirBox, windDirSymbol, windSpeedBox);

    results.append(cityBox, tempBox, description1Box, humidityBox, pressureBox, cloudsBox, windBox);


}

export {render}