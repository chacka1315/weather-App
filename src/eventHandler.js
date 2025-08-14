import getWeatherData from './weatherFetchHandler';
import { domHandler } from './DOMHandler';
function handleEvent() {
  const searchInput = document.querySelector('input[type=search]');
  const getWeatherBtn = document.querySelector('#getWeatherBtn');

  getWeatherBtn.addEventListener('click', () => {
    const userLocation = searchInput.value;
    getWeatherData(userLocation).then((weatherData) => {
      domHandler.displayWeatherData(weatherData);
      console.log('That is your weather data', weatherData);
    });
  });
}

export default handleEvent;
