import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Button, Image, Col } from 'react-bootstrap'
import WeatherDetailsCard from '../WeatherDetails/WeatherDetailsCard';
import '../../App.css'
import CountryStatsCard from '../CountryStats/CountryStatsCard';
import CountryHistoryCard from '../CountryHistory/CountryHistoryCard';

const CountryDetailCard = ({ countryData }) => {

  const countryCodesArray = [];
  countryCodesArray.push(countryData.cca2, countryData.cca3, countryData.ccn3, countryData.cioc)

  return (
    <>
      <Container fluid className='bg-colour'>
 
        <Container className='p-5 pink rounded-top-5'>
              <h1 className='display-3 fw-bold text-light text-center'>{countryData.name.common}</h1>
              <Row className='d-flex justify-content-center text-center'>
                <Col md={2} xs={5} className='hr rounded-3 mb-3'></Col>
              </Row>

        
          <Row className="py-5 d-flex justify-content-evenly">
            <Col md={4} className='d-flex align-content-center'>
              <Image src={countryData.flags.png} className="img-fluid rounded-3" alt="Flag" />
            </Col>
             
            <Col md={4} className='d-flex align-content-center p-3'>
              {countryData.coatOfArms.png ? (
                      <Image src={countryData.coatOfArms.png} className='img-fluid' alt="Coat Of Arms"/>
                ) : null}
            </Col>
          </Row>
          
          <Container className='d-flex justify-content-center'>
            <Row className='text-center fs-4 fw-bold text-light'>
                  <Col md={6} className='pt-5'>
                    <div className="text-align">
                      <h5>Region: <strong className='fw-light'>{countryData.region}</strong></h5>
                        <h5>Sub-Region: <strong className='fw-light'>{countryData.subregion}</strong></h5>
                        <h5>Population: <strong className='fw-light'>{countryData.population.toLocaleString()}</strong></h5>
                        <h5>Capital: <strong className='fw-light'>{countryData.capital}</strong></h5> 
                    </div>
                        
                   
                  </Col>
                  <Col md={6} className='pt-5'>
                  <div className="text-align">
                    {countryData.timezones > 1 ? (
                        <h5>Timezones: <strong className='fw-light'>{countryData.timezones[0]}</strong></h5>
                      ) : <h5>Timezones: <strong className='fw-light'>    {countryData.timezones[0]}</strong></h5>}

                      {countryData.landlocked ? (
                        <h5>{countryData.name.common} is <strong className='fw-light'>Landlocked</strong></h5>
                      ) : <h5>{countryData.name.common} is <strong className='fw-light'>Not Landlocked</strong></h5>}

                      {countryData.independent ? (
                        <h5>{countryData.name.common} is <strong className='fw-light'>Independent</strong></h5>
                      ) : <h5>{countryData.name.common} is <strong className='fw-light'>Not Independent</strong></h5>}

                      <h5>Citizens are <strong className='fw-light'>{countryData.demonyms.eng.f}</strong></h5>
                  </div>
                    
                  </Col>
                  <Col md={6} className='pt-5'>
                  <div className="text-align">           
                    {countryData.landlocked ? (
                      <h5>{countryData.name.common} is <strong className='fw-light'>Landlocked</strong></h5>
                    ) : <h5>{countryData.name.common} is <strong className='fw-light'>Not Landlocked</strong></h5>}

                      <h5>Status: <strong className='fw-light'>{countryData.status}</strong></h5>
                      <h5>Latitude & Longitude: <strong className='fw-light'>{countryData.latlng[0]}, {countryData.latlng[1]}</strong></h5>
                      <h5>Country Codes: <strong className='fw-light'>{countryCodesArray.join(', ')}</strong></h5>
                   </div>
                  </Col>
                  <Col md={6} className='pt-5'>
                  <div className="text-align"> 
                    <Col md={12}>
                      <Button className='mt-3' variant='light'>
                            <a href={countryData.maps.googleMaps} target="_blank" rel="noopener noreferrer" className='text-dark fw-bold text-decoration-none'>{countryData.name.common} Map</a>
                      </Button>
                    </Col>
                    <Col md={12}>
                      <Button className='mt-3' variant='light'>
                            <a href={countryData.maps.openStreetMaps} target="_blank" rel="noopener noreferrer" className='text-dark fw-bold text-decoration-none'>{countryData.name.common} Street Map</a>
                      </Button>
                    </Col>
                    </div>
                  </Col>
                 
                </Row>
          </Container>
        </Container>  

        {countryData ? <WeatherDetailsCard countryData={countryData} /> : <p className='text-dark fs-3'>Loading...</p>}

        {countryData ? <CountryStatsCard countryData={countryData} /> : <p className='text-dark fs-3'>Loading...</p>}

        {countryData ? <CountryHistoryCard countryData={countryData} /> : <p className='text-dark fs-3'>Loading...</p>}

        <Container className="d-flex justify-content-center mt-5 pb-5 mb-5">
          <Link className="text-dark text-decoration-none btn btn-outline-dark mt-3 mb-5 w-25" to="/">Back</Link>
        </Container>

     
    </Container>
    </>
   
    
    
 
  );
};

export default CountryDetailCard;
