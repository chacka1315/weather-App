import { WeatherData } from './types/weather';
import { format } from 'date-fns';
import getGIF from './GIFhandler';
function DOMHandler() {
  const container = document.querySelector('#container') as HTMLElement;
  const tempDiv = document.querySelector('#temperature') as HTMLElement;
  const tempminDiv = document.querySelector('#tempMin') as HTMLElement;
  const tempmaxDiv = document.querySelector('#tempMax') as HTMLElement;
  const iconImg = document.querySelector(
    '#weatherIcon>img'
  ) as HTMLImageElement;
  const conditionDiv = document.querySelector(
    '#weatherConditions'
  ) as HTMLElement;
  const descriptionDiv = document.querySelector(
    '#weatherDescription'
  ) as HTMLElement;
  const weekForecast = document.querySelector('#weekForecast') as HTMLElement;
  const location = document.querySelector('#locationResolved') as HTMLElement;
  const body = document.querySelector('body') as HTMLBodyElement;

  const changeBkgColor = (hour: number) => {
    if (hour > 18 || hour < 6) {
      body.classList.add('nightBkg');
      body.classList.remove('dayBkg');
    } else {
      body.classList.add('dayBkg');
      body.classList.remove('nightBkg');
    }
  };

  const getIcon = async (iconName: string) => {
    const response = await import(`./assets/icons/${iconName}.svg`);
    const icon = response.default;
    return icon;
  };

  const displayWeatherData = (data: WeatherData) => {
    location.textContent = data.address;
    tempDiv.textContent = `${data.daysData[0].temp}°`;
    const todayData = data.daysData[0];
    const currentHour = new Date().getHours();
    changeBkgColor(currentHour);
    getIcon(todayData.hours[currentHour].icon).then(
      (icon) => (iconImg.src = icon)
    );
    getGIF(`${todayData.hours[currentHour].icon} weather`);

    const currentDay = document.querySelector('#currentDay') as HTMLElement;
    currentDay.innerHTML = `Today, ${currentHour}:00`;

    conditionDiv.innerHTML = `At this time, ${todayData.hours[currentHour].conditions}`;
    descriptionDiv.textContent = data.daysData[0].description;
    tempminDiv.textContent = `min. ${data.daysData[0].tempmin}°`;
    tempmaxDiv.textContent = `max. ${data.daysData[0].tempmax}°`;
  };

  const displayWeekData = (data: WeatherData) => {
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
    container.style.textAlign = 'center';
    container.style.fontSize = '4rem';
  };

  return { displayWeatherData, displayFecthError, displayWeekData };
}

export const domHandler = DOMHandler();
