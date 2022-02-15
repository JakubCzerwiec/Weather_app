import _ from 'lodash';

import css from './style.css';
import {render} from './render';
import waitLogo from './img/waiting.png'

const waitingImg = new Image();
waitingImg.src = waitLogo;

const cityInput = document.querySelector('.cityInput');
const cityForm = document.querySelector('.cityForm');
const results = document.querySelector('.results');
const waiting = document.querySelector('.waiting');
waiting.append(waitingImg)

let cityName = '';

// Handling input
cityForm.addEventListener('submit', (e) => {
  e.preventDefault(e);
  waiting.classList.toggle('hidden');
  cityName = cityInput.value;
  results.innerHTML = '';

  render ();
  cityInput.value = '';
})

export {cityName};
