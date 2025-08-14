function DOMHandler() {
  const tempSpan = document.querySelector('#temp');
  const tempminDiv = document.querySelector('#tempMin');
  const tempmaxDiv = document.querySelector('#tempMax');
  const iconImg = document.querySelector('#weatherIcon>img');
  const conditionDiv = document.querySelector('#weatherConditions');
  const descriptionDiv = document.querySelector('#weatherDescription');

  const getIcon = async (iconName) => {
    const response = await import(`./assets/icons/${iconName}.svg`);
    const icon = response.default;
    console.log(icon);

    return icon;
  };

  const displayWeatherData = (data) => {
    tempSpan.textContent = data.daysData[0].temp;
    getIcon(data.daysData[0].icon).then((icon) => (iconImg.src = icon));

    conditionDiv.textContent = data.daysData[0].conditions;
    descriptionDiv.textContent = data.daysData[0].description;
    tempminDiv.textContent = data.daysData[0].tempmin;
    tempmaxDiv.textContent = data.daysData[0].tempmax;
  };
  return { displayWeatherData };
}

export const domHandler = DOMHandler();
