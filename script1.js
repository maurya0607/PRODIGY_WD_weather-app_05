// OpenWeather API Key
const apiKey = "5aeedae1098498d194181c2866c38e6e";

// Main function
function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      updateUI(data);
    })
    .catch(() => {
      alert("City not found. Please try again!");
    });
}

// Update UI with weather data
function updateUI(data) {
  document.getElementById("city").innerText =
    `${data.name}, ${data.sys.country}`;

  document.getElementById("condition").innerText =
    data.weather[0].description;

  document.getElementById("temp").innerText =
    `${Math.round(data.main.temp)} °C`;

  document.getElementById("humidity").innerText =
    `${data.main.humidity}%`;

  document.getElementById("wind").innerText =
    `${data.wind.speed} km/h`;
  
  document.getElementById("weather").classList.add("loaded");

}
