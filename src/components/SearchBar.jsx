import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import './SearchBar.css';
import { useState } from 'react';

export default function SearchBar({updateWeatherInfo}) {
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const API_KEY = "6ca12a31a6c17ffdc9fcf3e9ddbd4afb";
  const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";

  const generateWeatherInfo = async () => {
    if (!city.trim()) {
      alert("Please enter a city name.");
      return;
    }

    try {
      const response = await fetch(`${WEATHER_API}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();
     

      if (response.ok) {
       let result = {
        city:city,
        temp: jsonResponse.main.temp,
        feelsLike: jsonResponse.main.feels_like,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description

       };
       setError(null)
       return result
        
       
      } else {
        setError(jsonResponse.message || "Failed to fetch weather");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };
   const handleSubmit = async (event) =>{
    event.preventDefault();
   let newWeatherInfo = await generateWeatherInfo();
  if(newWeatherInfo){
updateWeatherInfo(newWeatherInfo);
setCity('');
  }
   
   }

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit} >
      <TextField
        onChange={handleChange}
        value={city}
        label="City"
        variant="outlined"
        margin="normal"
        sx={{ width: '300px' }}
      />
      <Button
      type='submit'
        size="medium"
        variant="contained"
        endIcon={<SearchIcon />}
      
      >
        Search
      </Button>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </form>
    </div>
  );
}
