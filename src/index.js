import handleEvent from './eventHandler.js';
import getWeatherData from './weatherFetchHandler';
import { domHandler } from './DOMHandler.js';
import { userLocation } from './eventHandler.js';
import './styles.css';
handleEvent();

getWeatherData('california', 'metric').then((weatherData) => {
  document.querySelector('#container').classList.remove('container');

  if (weatherData) {
    domHandler.displayWeatherData(weatherData);
    domHandler.displayWeekData(weatherData);
    console.log('That is your weather data', weatherData);
  } else {
    domHandler.displayFecthError();
  }
});
