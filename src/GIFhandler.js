async function getGIF(weather) {
  const img = document.querySelector('#conditionsGIF');
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=w82LiPlYelC1a3wtd75y0dNojybVfRHL&s=${weather}`,
      { mode: 'cors' }
    );

    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
}

export default getGIF;
