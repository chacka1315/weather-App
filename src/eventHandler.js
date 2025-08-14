import getWeatherData from './weatherFetchHandler';
function handleEvent() {
  const searchInput = document.querySelector('input[type=search]');
  const getWeatherBtn = document.querySelector('#getWeatherBtn');

  getWeatherBtn.addEventListener('click', () => {
    const userLocation = searchInput.value;
    getWeatherData(userLocation).then((weatherData) => {
      console.log('That is your weather data', weatherData);
    });
  });
}

export default handleEvent;
