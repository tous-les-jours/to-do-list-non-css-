const API_KEY = "9397b25e880336f53b1782702d5f9695"




function onGeoOk(position) {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    console.log("지금 계신 곳은", lat, lng)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(Response => Response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
}
function onGeoError(){
    alert("위치를 찾을 수 없습니다. 날씨 정보제공이 불가합니다")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);