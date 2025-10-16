async function getWeather(city = "London") {
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ffd316d6018d49c196a143433252509&q=${city}&aqi=no`);
    let data = await response.json();
    return data;
}

document.getElementById("submit").onclick = () => {
    console.log(document.getElementById("city").value);
    getWeather(document.getElementById("city").value).then((data) => {
        document.getElementById("weather-result").innerHTML = `City : ${data["location"]["name"]} <br> Region : ${data["location"]["region"]} <br> Country : ${data["location"]["country"]} <br> Local Time : ${data["location"]["localtime"]} <br> Temperature : ${data["current"]["temp_c"]}&deg C | ${data["current"]["temp_f"]}&deg F <br> ${data["current"]["condition"]["text"]}`;
        document.getElementById("weather-result-img").innerHTML = `<img src = "https:${data["current"]["condition"]["icon"]}" alt = "icon" height = "70%" width = "70%">`;
    }).catch((error) => {
        console.error("Error fetching weather data:", error);
    })
}