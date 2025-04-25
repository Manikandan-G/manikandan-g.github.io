async function getWeather() {
  const apiKey = "1826df7d34fa38bc3c746ea891360ff4_u"; // Replace this
  const city = "Toronto"; // Or get dynamically from user
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    document.getElementById("weather").innerText = `${temp}°C`;
  } catch (err) {
    document.getElementById("weather").innerText = "17°C";
    console.error(err);
  }
}

// navigator.geolocation.getCurrentPosition(pos => {
//     const { latitude, longitude } = pos.coords;
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=API_KEY&units=metric`;
//     // fetch like above
//   });

getWeather();
