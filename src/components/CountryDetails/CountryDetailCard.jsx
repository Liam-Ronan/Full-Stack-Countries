import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Button, Image, Col } from 'react-bootstrap'
import axios from 'axios';
import WeatherDetailsCard from '../WeatherDetails/WeatherDetailsCard';


const eventApiKey = import.meta.env.VITE_EVENT_API_KEY;

const CountryDetailCard = ({ countryData }) => {

  const [eventData, setEventData] = useState(null);


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
    <>
      <Container className='bg-colour'>
        
        <Row className="pt-4 d-flex justify-content-center text-center text-light">

        <h1 className='display-5 fw-normal'>{countryData.name.common}</h1>

      <Container className='p-5'>
        <Row className="p-5 d-flex justify-content-center">
            <Image src={countryData.flags.png} className="w-25 mx-5" alt="Flag" />
            
            {countryData.coatOfArms.png ? (
                  <Image src={countryData.coatOfArms.png} className='w-25 mx-5' alt="Coat Of Arms"/>
            ) : null}
        </Row>
      </Container>
     

        <Container className=''>
          <Button className='px-5' variant='light'>
            <a href={countryData.maps.googleMaps} target="_blank" rel="noopener noreferrer" className='text-dark fw-bold text-decoration-none'>{countryData.name.common} Map</a>
          </Button>
        </Container>

        

        <Container className='pt-5 mb-5 pb-5 text-start d-flex justify-content-center'>
          <Row>
            <Col md={4} className='px-5'>
              <h5 className='pt-3 fw-normal'>Region: <strong>{countryData.region}</strong></h5>
              <h5 className='pt-3 fw-normal'>Sub-Region: <strong>{countryData.subregion}</strong></h5>
              <h5 className='pt-3 fw-normal'>Capital: <strong>{countryData.capital}</strong></h5>
            </Col>
            <Col md={4} className='px-5'>
              <h5 className='pt-3 fw-normal'>Population: <strong>{countryData.population.toLocaleString()}</strong></h5>
              
              {countryData.timezones > 1 ? (
                <h5 className='pt-3 fw-normal'>Timezones: <strong>{countryData.timezones[0]}</strong></h5>
              ) : <h5 className='pt-3 fw-normal'>Timezones: <strong>    {countryData.timezones[0]}</strong></h5>}
              

              <h5 className='pt-3 fw-normal'>Citizens are: <strong>{countryData.demonyms.eng.f}</strong></h5>
            </Col>
            <Col md={4} className='px-5'>
              {countryData.independent ? (
                <h5 className='pt-3 fw-normal'>{countryData.name.common} is <strong>Independent</strong></h5>
              ) : <h5 className='pt-3 fw-normal'>{countryData.name.common} is <strong>Not Independent</strong></h5>}

              {countryData.landlocked ? (
                <h5 className='pt-3 fw-normal'>{countryData.name.common} is <strong>Landlocked</strong></h5>
              ) : <h5 className='pt-3 fw-normal'>{countryData.name.common} is <strong>Not Landlocked</strong></h5>}
            </Col>
          </Row>
          
        </Container>   

        <hr className='border border-3 mt-5 border-white'/>

        {countryData ? <WeatherDetailsCard countryData={countryData} /> : <p className='text-dark fs-3'>Loading...</p>}

        <Container className="d-flex justify-content-center mt-5 pb-5 mb-5">
          <Link className="text-decoration-none btn btn-outline-light mt-3 mb-5 w-25" to="/">Back</Link>
        </Container>

      </Row>
    </Container>
    </>
   
    
    
 
  );
};

export default CountryDetailCard;
