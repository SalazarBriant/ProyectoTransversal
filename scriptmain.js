// Clima
async function fetchWeather() {
    const apiKey = '8791da1caa6833d4c9ff7c35cbc40e2b';
    const city = 'Tijuana';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const weatherContainer = document.getElementById('weather');
        weatherContainer.innerHTML = `
            <div class="weather-info"><strong>Temperatura Actual:</strong> ${data.main.temp} °C</div>
            <div class="weather-info"><strong>Condiciones Actuales:</strong> ${data.weather[0].description}</div>
            <div class="weather-info"><strong>Porcentaje de Humedad:</strong> ${data.main.humidity} %</div>
            <div class="weather-info"><strong>Fuerza del viento:</strong> ${data.wind.speed} m/s</div>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

fetchWeather();

 document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Por favor, Rellene todos los campos.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Ingrese un correo electrónico válido.");
            return;
        }

        alert("Mensaje enviado con éxito!");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
