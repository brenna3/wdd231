const apiKey = "YOUR_API_KEY";
const city = "Kennewick"; // or Richland/Pasco/Tri-Cities

const currentWeatherEl = document.getElementById("weather-current");
const forecastEl = document.getElementById("weather-forecast");

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

// Current Weather
fetch(weatherURL)
  .then(response => response.json())
  .then(data => {
    currentWeatherEl.innerHTML = `
      <p>Temperature: ${Math.round(data.main.temp)}°F</p>
      <p>${data.weather[0].description}</p>
    `;
  });

// 3-Day Forecast
fetch(forecastURL)
  .then(response => response.json())
  .then(data => {
    const forecastDays = [];
    for (let i = 0; i < data.list.length; i++) {
      const forecastTime = data.list[i];
      if (forecastTime.dt_txt.includes("12:00:00")) {
        forecastDays.push(forecastTime);
      }
      if (forecastDays.length === 3) break;
    }

    forecastDays.forEach(day => {
      const date = new Date(day.dt_txt);
      const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
      forecastEl.innerHTML += `
        <div class="forecast-day">
          <h4>${weekday}</h4>
          <p>${Math.round(day.main.temp)}°F</p>
          <p>${day.weather[0].description}</p>
        </div>
      `;
    });
  });
