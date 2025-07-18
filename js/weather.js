const API_KEY = "c065b1266b6a811f0ace3e23e801cd00"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-Child");
        const city = document.querySelector("#weather span:last-Child");
        const name = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;

    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
