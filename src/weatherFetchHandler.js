async function getWeatherData(location) {
  const cleanData = (data) => {
    const weekDescription = data.description;
    const daysData = data.days;
    const latitude = data.latitude;
    const longitude = data.longitude;
    const address = data.resolvedAddress;
    return {
      weekDescription,
      daysData,
      longitude,
      latitude,
      address,
    };
  };
  try {
    const APIresponse = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=N6VPZGK5FP5DVTWDXBXAM9A8V&contentType=json`,
      { mode: 'cors' }
    );

    const response = await APIresponse.json();
    const locationData = response;
    console.log(locationData);
    const cleanedData = cleanData(locationData);
    return cleanedData;
  } catch (error) {
    console.log(error);
  }
}

export default getWeatherData;
