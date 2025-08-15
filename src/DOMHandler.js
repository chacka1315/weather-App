import { format } from 'date-fns';
function DOMHandler() {
  const container = document.querySelector('#container');
  const tempDiv = document.querySelector('#temperature');
  const tempminDiv = document.querySelector('#tempMin');
  const tempmaxDiv = document.querySelector('#tempMax');
  const iconImg = document.querySelector('#weatherIcon>img');
  const conditionDiv = document.querySelector('#weatherConditions');
  const descriptionDiv = document.querySelector('#weatherDescription');
  const weekForecast = document.querySelector('#weekForecast');
  const location = document.querySelector('#locationResolved');

  const getIcon = async (iconName) => {
    const response = await import(`./assets/icons/${iconName}.svg`);
    const icon = response.default;
    return icon;
  };

  const displayWeatherData = (data) => {
    location.textContent = data.address;
    tempDiv.textContent = `${data.daysData[0].temp}°`;
    const todayData = data.daysData[0];
    const currentHour = new Date().getHours();
    getIcon(todayData.hours[currentHour].icon).then(
      (icon) => (iconImg.src = icon)
    );

    const currentDay = document.querySelector('#currentDay');
    currentDay.innerHTML = `Today, ${currentHour}:00`;

    conditionDiv.innerHTML = `At this time, ${todayData.hours[currentHour].conditions}`;
    descriptionDiv.textContent = data.daysData[0].description;
    tempminDiv.textContent = `min. ${data.daysData[0].tempmin}°`;
    tempmaxDiv.textContent = `max. ${data.daysData[0].tempmax}°`;
  };

  const displayWeekData = (data) => {
    const weekData = data.daysData.slice(0, 7);
    weekForecast.textContent = '';

    weekData.forEach((day) => {
      const foreCastDiv = document.createElement('div');
      foreCastDiv.classList.add('foreCastDiv');

      const iconIm = document.createElement('img');
      getIcon(day.icon).then((icon) => (iconIm.src = icon));

      const temp = document.createElement('div');
      temp.textContent = `${day.temp}°`;

      const daydiv = document.createElement('div');
      daydiv.textContent = format(day.datetime, 'EEEE');

      foreCastDiv.appendChild(iconIm);
      foreCastDiv.appendChild(temp);
      foreCastDiv.appendChild(daydiv);

      weekForecast.appendChild(foreCastDiv);
    });
  };

  const displayFecthError = () => {
    container.innerHTML = 'Oops, something goes wrong...Refresh the page!';
  };

  return { displayWeatherData, displayFecthError, displayWeekData };
}

export const domHandler = DOMHandler();
