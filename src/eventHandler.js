import getWeatherData from './weatherFetchHandler';
import { domHandler } from './DOMHandler';
function handleEvent() {
  const searchInput = document.querySelector('input[type=search]');
  const getWeatherBtn = document.querySelector('#getWeatherBtn');

  getWeatherBtn.addEventListener('click', () => {
    const userLocation = searchInput.value;

    getWeatherData(userLocation, (unit = 'metric')).then((weatherData) => {
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
