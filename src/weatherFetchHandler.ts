import { WeatherData } from './types/weather';

interface HasKnownProps {
  description: object;
  days: any[];
  longitude: number;
  latitude: number;
  resolvedAddress: string;
}

async function getWeatherData(location: string, unit: string) {
  const cleanData = (data: HasKnownProps): WeatherData => {
    const weekDescription = data.description;
    const daysData = data.days;
    const latitude = data.latitude;
    const longitude = data.longitude;
    let address = data.resolvedAddress;
    address =
      address.charAt(0).toUpperCase() + address.slice(1, address.length);
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
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=N6VPZGK5FP5DVTWDXBXAM9A8V&contentType=json`,
      { mode: 'cors' }
    );

    if (APIresponse.status === 400) {
      return '';
    } else {
      const response = await APIresponse.json();
      const cleanedData = cleanData(response);
      return cleanedData;
    }
  } catch (error) {
    console.log(`Error : ${error}`);
  }
}

export default getWeatherData;
