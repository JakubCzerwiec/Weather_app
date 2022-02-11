import _ from 'lodash';

import css from './style.css';
import {render} from './render';

const cityInput = document.querySelector('.cityInput');
const cityForm = document.querySelector('.cityForm');
const results = document.querySelector('.results');
let cityName = '';

// Handling input
cityForm.addEventListener('submit', (e) => {
  e.preventDefault(e);
  cityName = cityInput.value;
  results.innerHTML = '';
  render ();
  cityInput.value = '';
})

export {cityName};
