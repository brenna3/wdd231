const apiKey = '8aa4ed6ea8ff70e6c20d2752aaf4a3f8';
const city = 'Richland, WA';
const units = 'imperial'; // Fahrenheit

const weatherCurrentEl = document.getElementById('weather-current');
const weatherForecastEl = document.getElementById('weather-forecast');

async function getWeather() {
  try {
    // Current weather
    const currentResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
    );
    const currentData = await currentResponse.json();

    // Display current weather
    weatherCurrentEl.innerHTML = `
      <p>Temperature: ${Math.round(currentData.main.temp)}°F</p>
      <p>Conditions: ${currentData.weather[0].description}</p>
    `;

    // 3-day forecast (using one call API)
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`
    );
    const forecastData = await forecastResponse.json();

    // Filter forecast for approx. midday next 3 days
    const forecastList = forecastData.list.filter((item) =>
      item.dt_txt.includes('12:00:00')
    ).slice(0, 3);

    let forecastHTML = '<h3>3-Day Forecast</h3><ul>';
    forecastList.forEach(day => {
      const date = new Date(day.dt * 1000).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
      forecastHTML += `<li>${date}: ${Math.round(day.main.temp)}°F, ${day.weather[0].description}</li>`;
    });
    forecastHTML += '</ul>';

    weatherForecastEl.innerHTML = forecastHTML;
  } catch (error) {
    weatherCurrentEl.textContent = 'Failed to load weather data.';
    console.error(error);
  }
}

getWeather();