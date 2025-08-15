import handleEvent from './eventHandler.js';
import getWeatherData from './weatherFetchHandler';
import { domHandler } from './DOMHandler.js';
import './styles.css';
handleEvent();

getWeatherData('california', 'metric').then((weatherData) => {
  document.querySelector('#container').classList.remove('container');
  if (weatherData) {
    domHandler.displayWeatherData(weatherData);
    domHandler.displayWeekData(weatherData);
  } else {
    domHandler.displayFecthError();
  }
});
