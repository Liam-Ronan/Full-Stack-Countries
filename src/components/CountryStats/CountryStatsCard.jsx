import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Image, Col } from 'react-bootstrap';
import '../../App.css'
import { BsCoin } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiSolidLeaf } from "react-icons/bi";
import { PiBooksFill } from "react-icons/pi";

const statsApiKey = import.meta.env.VITE_NINJA_API_KEY;

const CountryStatsCard = ({ countryData }) => {
  const [statsData, setStatsData] = useState([]);

  useEffect(() => {
    const fetchStats = () => {
        axios({
            method: 'get',
            url: `https://api.api-ninjas.com/v1/country?name=${countryData.name.common}`,
            headers: {
                'X-Api-Key': statsApiKey,
            },
            responseType: 'json',
        })
            .then(res => {
                const data = res.data
                setStatsData(data)
                console.log(data);

          
            })
            .catch(err => {
                console.error('Error: ', err);
            });
    }

    fetchStats();
}, [countryData]);

  if(statsData.length > 0) {
    return (
   
         <Container fluid className='p-5 red'>
            <Container className='p-3'>
              <Row className='d-flex justify-content-center text-center'>
                <h1 className='display-3 fw-bold text-light text-center'>Statistics</h1>
                <Col md={3} xs={5} className='hr rounded-3'></Col>
              </Row>

              <Row className='pt-4 text-center fs-4 fw-bold text-light'>
                <Col md={6} className='pt-5'>
                  <Col>
                    <BsCoin className='display-1 text-light'/>
                    <p className='pt-2'>Economics</p>
                  </Col>
                  <Col>
                    <h5>GDP Per Capita: <strong className='fw-light'>{statsData[0].gdp_per_capita}%</strong></h5>
                    <h5>GDP Growth: <strong className='fw-light'>{statsData[0].gdp_growth}%</strong></h5>
                    <h5>GDP: <strong className='fw-light'>{statsData[0].gdp}</strong></h5>
                    <h5>Imports: <strong className='fw-light'>{statsData[0].imports.toLocaleString()}</strong></h5>
                    <h5>Exports: <strong className='fw-light'>{statsData[0].exports.toLocaleString()}</strong></h5>                
                  </Col>
                </Col>
                <Col md={6} className='pt-5'>
                  <Col>
                    <FaPeopleGroup className='display-1 text-light'/>
                    <p className='pt-2'>Population</p>
                  </Col>
                  <Col>
                    <h5>Density: <strong className='fw-light'>{statsData[0].pop_density}%</strong></h5>
                    <h5>Growth: <strong className='fw-light'>{statsData[0].pop_growth}%</strong></h5>
                    <h5>Fertility: <strong className='fw-light'>{statsData[0].fertility}%</strong></h5>
                    <h5>Refugees: <strong className='fw-light'>{statsData[0].refugees}%</strong></h5>
                    <h5>Urban Population: <strong className='fw-light'>{statsData[0].urban_population}%</strong></h5>
                  </Col>
                </Col>
                <Col md={6} className='pt-5'>
                  <Col>
                    <BiSolidLeaf className='display-1 text-light'/>
                    <p className='pt-2'>Environment</p>
                  </Col>
                  <Col>                
                    <h5>Forested Area: <strong className='fw-light'>{statsData[0].forested_area}%</strong></h5>
                    <h5>Surface Area: <strong className='fw-light'>{statsData[0].surface_area.toLocaleString()}</strong></h5>
                    <h5>Threatened Species: <strong className='fw-light'>{statsData[0].threatened_species}</strong></h5>
                    <h5>Urban Population Growth: <strong className='fw-light'>{statsData[0].urban_population_growth}%</strong></h5>
                  </Col>
                </Col>
                <Col md={6} className='pt-5'>
                  <Col>
                    <PiBooksFill className='display-1 text-light'/>
                    <p className='pt-2'>Education</p>
                  </Col>
                  <Col>
                    <h5>Secondary School Enrollment Males: <strong className='fw-light'>{statsData[0].secondary_school_enrollment_male}%</strong></h5>
                    <h5>Secondary School Enrollment Females: <strong className='fw-light'>{statsData[0].secondary_school_enrollment_female}</strong></h5>
                    <h5>Post Secondary School Enrollment Males: <strong className='fw-light'>{statsData[0].post_secondary_enrollment_male}%</strong></h5>
                    <h5>Post Secondary School Enrollment Females: <strong className='fw-light'>{statsData[0].post_secondary_enrollment_female}%</strong></h5>
                  </Col>
                </Col>
              </Row>
            </Container>
          </Container> 
      
    )
  }
  else {
    return null;
  }
}

export default CountryStatsCard;
