// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather .emoji');
const captionDesc = document.querySelector('.emoji-caption');
const wind = document.querySelector('#wind-speed');


// asynchronous function that will use fetch() to request the given api url and then try to convert the response using a JSON parser that is built-in
async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=lakeside,ca,usa&appid=e069384a0b1b43e6c4d948c86089b178&units=imperial&units=imperial';

    
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed()}`;
    wind.innerHTML = `${weatherData.wind.speed.toFixed()}`;

    const desc = weatherData.weather[0].description;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;

    //Calculate the windchill
    let t = `${weatherData.main.temp}`;
    let s = `${weatherData.wind.speed}`;


    if (t <= 50 && s > 3) {
        let chill = 35.74 + (0.6215 * t) - (35.76 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16));
    
        chill = Math.trunc(chill);
        let text = chill.toString();
        let text2 = "℉";
        let result = text.concat(text2);
    
        //Put the chill into the html element
        document.getElementById("wind-chill").innerText = result;
    }
    else {
        document.getElementById("wind-chill").innerText = "N/A";
    }
}



