import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../Header';
import CountryDetailCard from './CountryDetailCard';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const CountryDetail = () => {
  const [countryData, setCountryData] = useState(null);
  const { countryName } = useParams();

  useEffect(() => {
    const fetchCountryData = () => {
      axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then(res => {
        console.log(res.data);
        setCountryData(res.data[0]);
      })
      .catch(err => {
        console.error(err);
      })
    };

    fetchCountryData();
  }, [countryName]);

  return (
    
    <>
    
        <Header />
        {countryData ? <CountryDetailCard countryData={countryData} /> : <p className='text-dark fs-3'>Loading...</p>}
     
    </>      
      
      
  );
};

export default CountryDetail;