import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css';

const historyApiKey = import.meta.env.VITE_NINJA_API_KEY;

const CountryHistoryCard = ({ countryData }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchHistory = () => {
      axios({
        method: 'get',
        url: `https://api.api-ninjas.com/v1/historicalevents?text=${countryData.name.common}`,
        headers: {
          'X-Api-Key': historyApiKey,
        },
        responseType: 'json',
      })
      .then(res => {
        const data = res.data;
        console.log(data);

        // Set the filtered data
        setFilteredData(data.slice(0, 6));
      })
      .catch(err => {
        console.error('Error: ', err);
      });
    }

    fetchHistory();
  }, [countryData]);

  if(filteredData.length > 0) {
    return (
      <Container fluid className='p-5 rounded-bottom-5 green'>
        <Container className='p-3'>
          <Row className='d-flex justify-content-center text-center'>
            <h1 className='display-3 fw-bold text-light text-center'>Historical Events</h1>
            <Col md={3} xs={5} className='hr rounded-3'></Col>
          </Row>
          <Row className='px-3 pt-4 text-center fs-4 fw-bold text-light'>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <Col md={4} xs={12} key={index} className='pt-5 text-start'>
                  <p>{item.day}/{item.month}/{item.year}</p>
                  <h5 className='fw-light'>{item.event}</h5>
                </Col>
              ))
            ) : (
              <p className='text-center pt-2'>Loading or no History data available.</p>
            )}
          </Row>
        </Container>
      </Container>
    );
  }
  else {
    <p className='text-center pt-2'>Loading or no Stats data available.</p>
  }
};

export default CountryHistoryCard;
