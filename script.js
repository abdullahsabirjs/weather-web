// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = '66232a515ebcf35084dc9c20333dfc52';

// Function to fetch weather data for a specific city
function getWeatherDataForCity(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherIcon = document.querySelector('.weather-icon');
      const temperature = document.querySelector('.temp');
      const city = document.querySelector('.city');
      const humidity = document.querySelector('.humidity');
      const windSpeed = document.querySelector('.wind');

      // Update the HTML with the weather data
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      temperature.textContent = `${data.main.temp}°C`;
      city.textContent = data.name;
      humidity.textContent = `${data.main.humidity}%`;
      windSpeed.textContent = `${data.wind.speed} km/h`;
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
    });
}

// Event listener for the search button
document.querySelector('button').addEventListener('click', () => {
  const cityInput = document.querySelector('input').value;
  if (cityInput) {
    getWeatherDataForCity(cityInput);
  }
});
