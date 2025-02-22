document.getElementById("search-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const searchText = document.getElementById("search-text").value;
  loadData(searchText);
  document.getElementById("search-text").value = "";
});

//load the data
const loadData = async (city) => {
  const apiKey = "8dd42c831d116837a85675f4cd65c4a6";
  const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const res = await fetch(url + city + `&appid=${apiKey}`);
  if (res.status == 404) {
    alert("Please Enter Valid City name");
    return;
  }
  const data = await res.json();
  displayLoadData(data);
};

//display load data
const displayLoadData = (data) => {
  const weatherIcon = document.getElementById("weather-icon");
  document.getElementById("temperature").innerText = parseInt(
    `${data.main.temp}`
  );
  document.getElementById("city-name").innerText = `${data.name}`;
  document.getElementById("humidity").innerText = `${data.main.humidity}`;
  document.getElementById("wind-speed").innerText = `${data.wind.speed}`;

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./images/rain.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./images/mist.png";
  }
  document.getElementById("weather").classList.remove("hidden");
};
