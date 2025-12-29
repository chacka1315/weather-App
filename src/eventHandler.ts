import getWeatherData from './weatherFetchHandler';
import { domHandler } from './DOMHandler';
function handleEvent() {
  const searchInput = document.querySelector(
    'input[type=search]'
  ) as HTMLInputElement;
  const getWeatherBtn = document.querySelector(
    '#getWeatherBtn'
  ) as HTMLButtonElement;
  const unitToogleBtn = document.querySelector(
    '#tempUnitToggle'
  ) as HTMLInputElement;
  const celciusBtn = document.querySelector('#metric');
  const fahrenheitBtn = document.querySelector('#us');
  const loadingComponent = document.querySelector('.loadingBtn');
  let userLocation = 'california';
  let unit = 'metric';

  unitToogleBtn?.addEventListener('change', () => {
    loadingComponent?.classList.add('loadingBtnVisible');
    if (unitToogleBtn.checked) {
      unit = 'us';
      fahrenheitBtn?.classList.add('current-unit');
      celciusBtn?.classList.remove('current-unit');
    } else {
      unit = 'metric';
      celciusBtn?.classList.add('current-unit');
      fahrenheitBtn?.classList.remove('current-unit');
    }

    unitToogleBtn.disabled = true;
    getWeatherData(userLocation, unit).then((weatherData) => {
      if (weatherData) {
        domHandler.displayWeatherData(weatherData);
        domHandler.displayWeekData(weatherData);
        unitToogleBtn.disabled = false;
      } else {
        domHandler.displayFecthError();
      }
      loadingComponent?.classList.remove('loadingBtnVisible');
    });
  });

  const regex = new RegExp("[A-Za-zÀ-ÿ'-]{2,100}");

  getWeatherBtn.addEventListener('click', () => {
    if (!regex.test(searchInput.value.trim())) {
      alert('Enter a correct location name !');
      return;
    }
    userLocation = searchInput.value.trim();
    loadingComponent?.classList.add('loadingBtnVisible');
    getWeatherData(userLocation, unit).then((weatherData) => {
      if (weatherData) {
        domHandler.displayWeatherData(weatherData);
        domHandler.displayWeekData(weatherData);
      } else if (weatherData === '') {
        //if the serveur can't fin the location
        alert('Bad request, cannot find this location');
      } else {
        //if we couldnot get data, perhaps connexion problem
        domHandler.displayFecthError();
      }
      loadingComponent?.classList.remove('loadingBtnVisible');
    });
  });
}
export default handleEvent;
