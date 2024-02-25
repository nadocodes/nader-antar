import React, { useState, useEffect } from 'react';
import  weather, { searchCities }  from './utils/Weather.js'
import './WeatherApp.css'

function WeatherApp() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [city, setCity] = useState<string>('');
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const [suggestionLoading, setSuggestionLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      const data = await weather('London');
      setLoading(false);
      setWeatherData(data);
    }
    getWeather();
  }
  , []);

  interface CitySuggestion {
    id: string;
    name: string;
    country: string;
  }

  const selectCity = (name: string) => {
    setCity(name);
    setSuggestions([]);
  };
  
  const getWeather = async (e: any) => {
    e.preventDefault();
    setWeatherData(null);
    if (!city) {
      setError('Please enter a city');
      return;
    }
    setLoading(true);
    const data = await weather(city);
    setLoading(false);
    if (data && data.message) {
      const errorRequest = JSON.parse(data.request.responseText);
      const errorMessage = errorRequest.error.message;
      setError(errorMessage);
      setLoading(false);
      return;
    }
    setWeatherData(data);
    setSuggestions([]);
    console.log(data);
    setError('');
  }


  return (
    <div className='WeatherApp'>
        <form onSubmit={getWeather}>
          <div className="search-container">
            <input
              className='search-input'
              type='text'
              placeholder='Enter city'
              value={city}
              onChange={async (e) => {
                setCity(e.target.value);
                if (e.target.value) {
                  setSuggestionLoading(true);
                  const fetchedSuggestions = await searchCities(e.target.value);
                  setSuggestions(fetchedSuggestions);
                  setSuggestionLoading(false);
                } else {
                  setSuggestions([]);
                }
              }}
            />
            {suggestions.length > 0 && (
              <ul className='suggestions-container'>
                {suggestionLoading && <li className='suggestion-item'>Loading...</li>}
                {suggestions.map((suggestion: CitySuggestion) => (
                  <li className='suggestion-item' key={suggestion.id} onClick={() => selectCity(`${suggestion.name}, ${suggestion.country}`)}>
                    {suggestion.name}, {suggestion.country}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button type='submit'>Search</button>
        </form>
        <div className='weather-body'>
          {loading && <p className='current-city'>Loading...</p>}
          {error && <p className='current-city'>{error}</p>}
          {weatherData && (
            <div className='today-forecast'>
              <div className='current-weather'>
                <p className='current-city'>{weatherData.location.name}</p>
                <p className='current-country'>{weatherData.location.country}</p>
                <img src={weatherData.current.condition.icon} alt='weather icon' />
                <p className='temp'>{Math.round(weatherData.current.temp_c)}°C</p>
              </div>
              <div className='hourly-forecast'>
                <div className='forecast-container'>
                  {weatherData.forecast.forecastday[0].hour.map((hour: any) => (
                    <div key={hour.time}>
                      <p>{hour.time.slice(11, 16)}</p>
                      <img src={hour.condition.icon} alt='weather icon' />
                      <p className='temp'>{Math.round(hour.temp_c)}°C</p>
                    </div>
                  ))}
                </div>
                </div>
            </div>
          )}
          {weatherData && (
            <div className='forecast'>
              {/* <p className='forecast-header'>Forecast</p> */}
              <div className='forecast-container'>
                {weatherData.forecast.forecastday.map((day: any) => {
                  // Create a new Date object from the day.date string
                  const date = new Date(day.date);
                  // Get the day name in the current locale
                  const dayName = date.toLocaleDateString('en-GB', { weekday: 'long' });

                  return (
                    <div key={day.date}>
                      <p>{dayName}</p> {/* Changed this line to show the day name */}
                      <img src={day.day.condition.icon} alt='weather icon' />
                      <p className='temp'>{Math.round(day.day.avgtemp_c)}°C</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      <div className='weather-footer'>
        Powered by <a href="https://www.weatherapi.com/" target='_blank' title="Free Weather API">WeatherAPI.com</a>
      </div>
    </div>
  )
}

export default WeatherApp




