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

 function validarFormulario() {
         // Obtener los valores de los campos de entrada
            var nombre = document.getElementById("nombre").value;
            var email = document.getElementById("com").value;

        // Verificar si los campos están vacíos
             if (nombre == "") {
                mostrarMensaje("Por favor, ingresa tu nombre.");
                  return false;
             } else if (com == "") {
                   mostrarMensaje("Por favor, ingresa el comentario.");
                  return false;
              }

        // Si todos los campos son válidos, mostrar un mensaje de éxito
        mostrarMensaje("Gracias por enviar el formulario, " + nombre + "!");
        return false; // Evitar que el formulario se envíe de forma predeterminada
        }
        function mostrarMensaje(mensaje) {
            document.getElementById("mensaje").innerHTML = mensaje;// Mostrar el mensaje en el elemento con el id "mensaje"
            setTimeout(function() {
                document.getElementById("mensaje").innerHTML = "";// Después de 3 segundos, borrar el mensaje
            }, 3000);
        }
