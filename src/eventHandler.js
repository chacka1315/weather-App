import getWeatherData from './weatherFetchHandler';
import { domHandler } from './DOMHandler';
function handleEvent() {
  const searchInput = document.querySelector('input[type=search]');
  const getWeatherBtn = document.querySelector('#getWeatherBtn');
  const unitToogleBtn = document.querySelector('#tempUnitToggle');
  const celciusBtn = document.querySelector('#metric');
  const fahrenheitBtn = document.querySelector('#us');
  let userLocation = 'california';
  let unit = 'metric';

  unitToogleBtn.addEventListener('change', () => {
    if (unitToogleBtn.checked) {
      unit = 'us';
      fahrenheitBtn.classList.add('current-unit');
      celciusBtn.classList.remove('current-unit');
    } else {
      unit = 'metric';
      celciusBtn.classList.add('current-unit');
      fahrenheitBtn.classList.remove('current-unit');
    }

    unitToogleBtn.desabled = true;
    getWeatherData(userLocation, unit).then((weatherData) => {
      if (weatherData) {
        domHandler.displayWeatherData(weatherData);
        domHandler.displayWeekData(weatherData);
        console.log('That is your weather data', weatherData);
        unitToogleBtn.desabled = false;
      } else {
        domHandler.displayFecthError();
      }
    });
  });

  getWeatherBtn.addEventListener('click', () => {
    userLocation = searchInput.value;
    getWeatherData(userLocation, unit).then((weatherData) => {
      if (weatherData) {
        domHandler.displayWeatherData(weatherData);
        domHandler.displayWeekData(weatherData);
        console.log('That is your weather data', weatherData);
      } else {
        domHandler.displayFecthError();
      }
    });
  });
}
export default handleEvent;
