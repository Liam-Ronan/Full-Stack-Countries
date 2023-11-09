import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Image, Col } from 'react-bootstrap';
import '../../App.css'

const historyApiKey = import.meta.env.VITE_NINJA_API_KEY;

const CountryHistoryCard = ({ countryData }) => {
  const [historyData, setHistoryData] = useState(null);

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
                const data = res.data
                setHistoryData(data)
                console.log(data);
            })
            .catch(err => {
                console.error('Error: ', err);
            });
    }

    fetchHistory();
}, [countryData]);

  if(historyData) {
    return (
   
         <Container fluid className='p-5 rounded-bottom-5 green'>
            <Container className='p-3'>
              <Row className='d-flex justify-content-center text-center'>
                <h1 className='display-3 fw-bold text-light text-center'>History</h1>
                <Col md={3} xs={5} className='hr rounded-3'></Col>
              </Row>

              <Row className='pt-4 text-center fs-4 fw-bold text-light'>
                <Col md={6} className='pt-5'>
                  <Col>
                   <p></p>
                  </Col>
                  <Col>
          
                  </Col>
                </Col>
                <Col md={6} className='pt-5'>
                  <Col>
                
                  </Col>
                  <Col>
     
                  </Col>
                </Col>
                <Col md={6} className='pt-5'>
                  <Col>
               
                  </Col>
                  <Col>                
      
                  </Col>
                </Col>
                <Col md={6} className='pt-5'>
                  <Col>
                 
                  </Col>
                  <Col>

                  </Col>
                </Col>
              </Row>
            </Container>
          </Container> 
      
    )
  }
}

export default CountryHistoryCard;
