import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap'
import axios from 'axios';

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
const eventApiKey = import.meta.env.VITE_EVENT_API_KEY;

const CountryDetailCard = ({ countryData }) => {

  const [weatherData, setWeatherData] = useState(null);
  const [eventData, setEventData] = useState(null);

  useEffect(() => {

    const weatherApiURL = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${countryData.latlng[0]},${countryData.latlng[1]}&aqi=no`;

    const fetchWeatherData = () => {
      axios.get(weatherApiURL)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      })
    }

    fetchWeatherData()
  }, [countryData.latlng])

  useEffect(() => {

    const eventApiURL = `https://app.ticketmaster.com/discovery/v2/events?countryCode=${countryData.cca2}&apikey=${eventApiKey}`

    const seenEventNames = new Set();

    const fetchEventData = () => {
      axios.get(eventApiURL)
      .then(res => {
        const events = res.data._embedded.events;

        const uniqueEvents = events.filter(event => {
          if(seenEventNames.has(event.name)) {
            return false;
          }
          else {
            seenEventNames.add(event.name)
            return true;
          }
        });
        console.log(uniqueEvents);
      })
      .catch(err => {
        console.error(err);
      })
    }

    fetchEventData()
  }, [countryData.cca2])

  return (
    
    <Container className='bg-colour'>
              <Row className="pt-4 d-flex justify-content-center">

                <h1 className='display-5 fw-normal text-light d-flex justify-content-center pb-5 mb-5'>{countryData.name.common}</h1>

                <Col md={3} sm={8} className="text-light">
                  <p className='mx-5 pt-4 fw-normal'>Region: {countryData.region}</p>
                  <p className='mx-5 pt-4 fw-normal'>Sub-Region: {countryData.subregion}</p>
                  <p className='mx-5 pt-4 fw-normal'>Capital: {countryData.capital}</p>
                  <p className='mx-5 pt-4 fw-normal'>Population: {countryData.population.toLocaleString()}</p>
                  <p className='mx-5 pt-4 fw-normal'>Latitude: {countryData.latlng[0].toFixed(1)}</p>
                  <p className='mx-5 pt-4 fw-normal'>Longitude: {countryData.latlng[1].toFixed(1)}</p>
                </Col>

                <Col md={3} sm={8} className="p-4">
                  <Image src={countryData.flags.png} className='h-100' alt="" />
                </Col>

                <Container className="d-flex justify-content-center mt-5 pb-5 mb-5">
                  <Link className="text-decoration-none btn btn-outline-light mt-3 mb-5 w-25" to="/">Back</Link>
                </Container>

              </Row>
    </Container>
    
    
 
  );
};

export default CountryDetailCard;
