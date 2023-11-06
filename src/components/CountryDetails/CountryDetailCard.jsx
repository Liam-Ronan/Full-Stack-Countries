import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Button, Image, Col } from 'react-bootstrap'
import WeatherDetailsCard from '../WeatherDetails/WeatherDetailsCard';

const CountryDetailCard = ({ countryData }) => {

  return (
    <>
      <Container className='bg-colour'>
        
        <Row className="pt-4 d-flex justify-content-center text-center text-light">

        <h1 className='display-4 fw-normal'>{countryData.name.common}</h1>

        <Container className='p-5'>
          <Row className="p-5 d-flex justify-content-center">
            <Col md={4} className='d-flex align-content-center'>
              <Image src={countryData.flags.png} className="img-fluid" alt="Flag" />
            </Col>
             
            <Col md={4} className='d-flex align-content-center'>
              {countryData.coatOfArms.png ? (
                      <Image src={countryData.coatOfArms.png} className='img-fluid' alt="Coat Of Arms"/>
                ) : null}
            </Col>
          </Row>
        </Container>  

       <Container className='pt-2 mb-5 pb-2 text-center d-flex justify-content-center'>
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

        <Container>
          <Button className='px-3' variant='light'>
            <a href={countryData.maps.googleMaps} target="_blank" rel="noopener noreferrer" className='text-dark fw-bold text-decoration-none'>{countryData.name.common} Map</a>
          </Button>
        </Container>

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
