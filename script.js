async function getWeather() {
    const city = document.getElementById('city').value.trim();
    const apiKey = 'd92fcc34c4b01f6c3c4cbd9705969e10'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (!city) {
        alert('Please enter a city!');
        return;
    }

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        alert('Error fetching weather data. Please try again later.');
    }
}

function displayWeather(data) {
    const weatherCard = document.getElementById('weather-card');
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    // Update the weather card with the new data
    weatherCard.innerHTML = `
        <h2>${cityName}</h2>
        <div class="temp">${temperature}°C</div>
        <div class="description">${description}</div>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong class="wind-speed">Wind Speed:</strong> ${windSpeed} m/s</p>
    `;

    // Show the weather card
    weatherCard.style.display = 'block';
}
