let now = new Date();
let dateToday = document.querySelector("#date");
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
dateToday.innerHTML = `${day} ${hours}:${minutes}`;

let currentCity = document.querySelector("#city-name");
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  if (searchInput.value) {
    currentCity.innerHTML = `${searchInput.value}`;
  } else {
    currentCity.innerHTML = `Please enter a city!`;
  }
}

let apiKey = "ffcf1dd31284a1e1ce7bc5af183b32b7";

function currentTemp(response) {
  let cityName = document.querySelector("#city-name");
  let tempToday = document.querySelector("#weather-today");
  let roundTemp = Math.round(response.data.main.temp);
  cityName.innerHTML = response.data.name;
  tempToday.innerHTML = `${roundTemp}°C`;
}

function searchForCity(city) {
  let apiKey = "ffcf1dd31284a1e1ce7bc5af183b32b7";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(currentTemp);
}

function submit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchForCity(city);
}

function showPosition(position) {
  let apiKey = "ffcf1dd31284a1e1ce7bc5af183b32b7";
  let units = "metric";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(currentTemp);
}

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", submit);

let currentButton = document.querySelector("#current");
currentButton.addEventListener("click", currentLocation);

searchForCity("Cape Town");
function celcius(event) {
  event.preventDefault();
  let linkCelcius = document.querySelector("#weather-today");
  linkCelcius.innerHTML = 18;
}
