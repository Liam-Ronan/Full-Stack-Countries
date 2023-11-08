import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Image, Col } from 'react-bootstrap';
import TimeDetails from '../TimeDetails';
import '../../App.css'
import { BsWind } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { BsSunFill } from "react-icons/bs";



const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherDetailsCard = ({ countryData }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = () => {
      const weatherApiURL = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${countryData.latlng[0]},${countryData.latlng[1]}&aqi=no`;

      axios.get(weatherApiURL)
        .then(res => {
          const data = res.data;

          data && data.current ? (setWeatherData(data)) : console.error("Weather data is not as expected");
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
      <Container fluid className='p-5 blue'>
        <Container>
          <Row className='d-flex justify-content-center text-center'>
            <h1 className='display-3 fw-bold text-light text-center'>Current Weather</h1>
            <Col md={4} xs={5} className='hr rounded-3'></Col>
            {countryData ? <TimeDetails countryData={countryData} /> : <p className='text-light display-1'>Loading...</p>}
            <h3 className='text-light fw-light'>{weatherData.current.condition.text}</h3>
          </Row>
          
          <Row className='d-flex justify-content-center text-center pt-3 pb-3'>
            <Col md={2} xs={6}>
              <Image src={weatherData.current.condition.icon} className='img-fluid h-100'></Image>
            </Col>
            <Col md={2} xs={6} className='d-flex align-items-center text-xs-center text-center'>
              <h1 className='text-light display-2 fw-bold'>{weatherData.current.temp_c.toFixed(0)}°C</h1>
            </Col>

          </Row>

          <Row className='pt-3 text-center'>
            <Col>
              <BsWind className='display-1 text-light'/>
              <h3 className='text-light display-5 pt-2 fw-bold'>{weatherData.current.wind_kph}</h3>
              <p className='text-light fw-bold'>KM/hr</p>
            </Col>
            <Col>
              <WiHumidity className='display-1 text-light'/>
              <h3 className='text-light display-5 pt-2 fw-bold'>{weatherData.current.humidity}</h3>
              <p className='text-light fw-bold'>g/kg</p>
            </Col>
            <Col>
              <BsSunFill className='display-1 text-light'/>
              <h3 className='text-light display-5 pt-2 fw-bold'>{weatherData.current.uv}</h3>
              <p className='text-light fw-bold'>UV</p>
            </Col>
          </Row>
        </Container>
                 
      </Container>
    );
  }

  return null;
};

export default WeatherDetailsCard;
