// openweathermap.org 사이트에 로그인 후 API 키 받아오기
const API_KEY = "89df5497eff532a13168a5062e009cee";

const span_weather = document.querySelector("#weather span:first-child");
const span_city = document.querySelector("#weather span:last-child");

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    // api를 사용해서 날씨 정보 얻어오기
    fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        span_weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        span_city.innerText = data.name;
    })
    .catch(e => console.log(e));
}

function onGeoError() {
    alert("We can't find you. No weather information for you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);