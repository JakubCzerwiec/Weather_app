import _ from 'lodash';

import css from './style.css';
import {render} from './render';

const cityInput = document.querySelector('.cityInput');
const cityForm = document.querySelector('.cityForm');
let cityName = '';

// Handling input
cityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  cityName = cityInput.value;
  render ()
})

export {cityName};
