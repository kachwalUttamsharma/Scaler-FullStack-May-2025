const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dataField = document.querySelector(".time_location span");
const imageField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const form = document.querySelector("form");
const searchField = document.querySelector(".searchField");

function updateWeatherData(
  cityName,
  temperature,
  time,
  currentCondition,
  conditionLogo
) {
  cityField.innerText = cityName;
  temperatureField.innerText = temperature;
  dataField.innerText = time;
  weatherField.innerText = currentCondition;
  imageField.src = conditionLogo;
}

async function fetchData(target) {
  const endPoint = `http://api.weatherapi.com/v1/current.json?key=d40257d6c98d4435be475830230807&q=${target}`;
  const response = await fetch(endPoint);
  const data = await response.json();

  const currentTemp = data.current.temp_c;
  const locationName = data.location.name;
  const localTime = data.location.localtime;

  const currentCondition = data.current.condition.text;
  const conditonLogo = data.current.condition.icon;

  updateWeatherData(
    locationName,
    currentTemp,
    localTime,
    currentCondition,
    conditonLogo
  );
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stops page from represhing
  const target = searchField.value;
  if (target.length === 0) {
    alert("enter city name");
    return;
  }
  fetchData(target);
});

fetchData("Mumbai");
