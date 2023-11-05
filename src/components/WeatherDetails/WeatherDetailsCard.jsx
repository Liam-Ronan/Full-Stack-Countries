import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Button, Image, Col } from 'react-bootstrap'

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherDetailsCard = ({ countryData }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = () => {
      const weatherApiURL = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${countryData.latlng[0]},${countryData.latlng[1]}&aqi=no`;

      axios.get(weatherApiURL)
        .then(res => {
          const data = res.data;

          data && data.current ? (setWeatherData(data)) : console.error("Weather data structure is not as expected")
        })
        .catch(err => {
          console.error(err);
        });
    };

    fetchWeatherData();
  }, [countryData]);

  if (weatherData) {
    return (
      <Container>
        <Row className='pt-5'>
          <h1 className='fw-normal'>{countryData.name.common} Current Weather</h1>
          <h2 className='text-light'>{weatherData.current.temp_c.toFixed(0)}°C</h2>
        </Row>
      </Container>
    );
  }

  return null;
};

export default WeatherDetailsCard;
