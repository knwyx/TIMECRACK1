const claveApi = "9df2b3437a0a49688ed175003252504";
const idioma = "es";

function obtenerClima() {
  const ciudad = document.getElementById("input-ciudad").value;
  if (ciudad.trim() !== "") {
    fetch(`https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`)
      .then((res) => res.json())
      .then((data) => mostrarClima(data));
  }
}

function mostrarClima(data) {
  const climaDiv = document.getElementById("clima-info");
  climaDiv.innerHTML = `
    <p class="clima-texto">${data.current.condition.text}</p>
    <img src="${data.current.condition.icon}" class="clima-icono" />
    <h1 class="temp">${data.current.temp_c}°C</h1>
    <h2 class="ciudad">${data.location.name}, ${data.location.country}</h2>
    <div class="detalles">
      <div class="col">
        <img src="clima-ejemplo.webp" />
        <div>
          <p class="humedad">${data.current.humidity}%</p>
          <p>Humedad</p>
        </div>
      </div>
      <div class="col">
        <img src="viento.png" />
        <div>
          <p class="viento">${data.current.wind_kph} km/h</p>
          <p>Viento</p>
        </div>
      </div>
    </div>
  `;
}
