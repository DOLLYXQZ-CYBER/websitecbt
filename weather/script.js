const apiKey = "f6b1156077c61d34fa9fd6781c6f21b4";

async function getWeather() {

    const city = document.getElementById("city").value.trim();

    if (city === "") {
        alert("Please enter a city.");
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("cityName").textContent =
            data.name + ", " + data.sys.country;

        document.getElementById("temperature").textContent =
            Math.round(data.main.temp) + "°C";

        document.getElementById("description").textContent =
            data.weather[0].description;

        document.getElementById("humidity").textContent =
            "Humidity: " + data.main.humidity + "%";

        document.getElementById("wind").textContent =
            "Wind: " + data.wind.speed + " m/s";

    } catch (error) {

        document.getElementById("cityName").textContent = "City not found";
        document.getElementById("temperature").textContent = "--";
        document.getElementById("description").textContent = "";
        document.getElementById("humidity").textContent = "";
        document.getElementById("wind").textContent = "";

    }

}