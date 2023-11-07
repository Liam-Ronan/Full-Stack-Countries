import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Button, Image, Col } from 'react-bootstrap'
import TimeDetails from '../TimeDetails';
import App from '../../App.css';

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherDetailsCard = ({ countryData }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = () => {
      const weatherApiURL = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${countryData.latlng[0]},${countryData.latlng[1]}&aqi=no`;

      axios.get(weatherApiURL)
        .then(res => {
          const data = res.data;

          data && data.current ? (setWeatherData(data)) : console.error("Weather data is not as expected")
          console.log(data);
        })
        .catch(err => {
          console.error(err);
        });
    };

    fetchWeatherData();
  }, [countryData]);

  if (weatherData) {
    return (
      <Container className='py-5'>
         <h1 className='display-4 fw-normal'>Current Weather</h1>
         <h2 className='text-light'>{weatherData.current.temp_c.toFixed(0)}°C</h2>
         <h4 className='text-light fw-light'>{weatherData.current.condition.text}</h4>
         <Image src={weatherData.current.condition.icon} className='h-25'></Image>
         
         {countryData ? <TimeDetails countryData={countryData} /> : <p className='text-dark fs-3'>Loading...</p>}
        <Row className='pt-5'>
          <Col md={4} className='g-3'>
            <h1 className='fw-normal'>{countryData.name.common} Current Weather</h1>
            <h2 className='text-light'>{weatherData.current.temp_c.toFixed(0)}°C</h2>
          </Col>
          <Col md={4} className='g-3'>
            <h1 className='fw-normal'>{countryData.name.common} Current Weather</h1>
            <h2 className='text-light'>{weatherData.current.temp_c.toFixed(0)}°C</h2>
          </Col>
          <Col md={4} className='g-3'>
            <h1 className='fw-normal'>{countryData.name.common} Current Weather</h1>
            <h2 className='text-light'>{weatherData.current.temp_c.toFixed(0)}°C</h2>
          </Col>
        </Row>
      </Container>
    );
  }

  return null;
};

export default WeatherDetailsCard;
