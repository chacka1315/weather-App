import handleEvent from './eventHandler';
import getWeatherData from './weatherFetchHandler';
import { domHandler } from './DOMHandler';
import './styles.css';

handleEvent();
getWeatherData('california', 'metric').then((weatherData) => {
  document.querySelector('#container')?.classList.remove('container');
  if (weatherData) {
    domHandler.displayWeatherData(weatherData);
    domHandler.displayWeekData(weatherData);
  } else {
    domHandler.displayFecthError();
  }
});
