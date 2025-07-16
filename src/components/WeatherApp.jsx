import SearchBar from "./SearchBar"
import InfoBox from "./Infobox"
import { useEffect, useState } from "react"

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({})

  const updateWeatherInfo = (newWeatherInfo) => {
    setWeatherInfo(newWeatherInfo)
  }

  useEffect(() => {
    const fetchDefaultCityWeather = async () => {
      const API_KEY = "6ca12a31a6c17ffdc9fcf3e9ddbd4afb";
      const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";
      try {
        const response = await fetch(`${WEATHER_API}?q=Nadiad&appid=${API_KEY}&units=metric`);
        const jsonResponse = await response.json();

        if (response.ok) {
          let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            feelsLike: jsonResponse.main.feels_like,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description.replace(/\b\w/g, c => c.toUpperCase())
          };
          updateWeatherInfo(result);
        } else {
          console.error("Error:", jsonResponse.message);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchDefaultCityWeather();
  }, []);

  return (
    <div>
      <SearchBar updateWeatherInfo={updateWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp
