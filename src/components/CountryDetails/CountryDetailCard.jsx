import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap'

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

const CountryDetailCard = ({ countryData }) => {
  return (
    <Container fluid className='bg-colour pt-4'>
        <Row className="pt-4 d-flex justify-content-center bg-colour">

            <h1 className='display-5 fw-normal text-light d-flex justify-content-center pb-5 mb-5'>{countryData.name.common}</h1>

            <Col md={3} sm={8} className="text-light">
              <p className='mx-5 pt-4 fw-normal'>Region: {countryData.region}</p>
              <p className='mx-5 pt-4 fw-normal'>Sub-Region: {countryData.subregion}</p>
              <p className='mx-5 pt-4 fw-normal'>Capital: {countryData.capital}</p>
              <p className='mx-5 pt-4 fw-normal'>Population: {countryData.population.toLocaleString()}</p>
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
