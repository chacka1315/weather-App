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
        unitToogleBtn.desabled = false;
      } else {
        domHandler.displayFecthError();
      }
    });
  });

  const regex = new RegExp("[A-Za-zÀ-ÿ\s'-]{2,100}");
  getWeatherBtn.addEventListener('click', () => {
    userLocation = searchInput.value.trim();
    if (!regex.test(userLocation)) {
      alert('Enter a correct location name !');
      return;
    }
    getWeatherData(userLocation, unit).then((weatherData) => {
      if (weatherData) {
        domHandler.displayWeatherData(weatherData);
        domHandler.displayWeekData(weatherData);
      } else if (weatherData === '') {
        //if the serveur can't fin the location
        alert('Bad request, cannot find this location');
      } else {
        //if we couldnot get data, perhaps connexion problem
        displayFecthError();
      }
    });
  });
}
export default handleEvent;
