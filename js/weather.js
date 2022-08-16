function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(position);
    console.log(`You live in ${lat} ${lng}`);
}

function onGeoError() {
    alert("We can't find you. No weather information for you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);