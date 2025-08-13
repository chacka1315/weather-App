async function getWeatherData(location) {
  try {
    const APIresponse = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=N6VPZGK5FP5DVTWDXBXAM9A8V&contentType=json`,
      { mode: 'cors' }
    );

    const locationData = await APIresponse.json();
    console.log(locationData);
  } catch (error) {
    console.log(error);
  }
}

export default getWeatherData;
