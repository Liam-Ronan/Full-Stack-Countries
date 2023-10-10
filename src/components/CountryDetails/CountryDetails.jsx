import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../Header';
import CountryDetailCard from './CountryDetailCard';

const CountryDetail = () => {
  const [countryData, setCountryData] = useState(null);
  const { countryName } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/countries/${countryName}`);

        if (!response.ok) {
          throw new Error("Country Not Found");
        }

        const data = await response.json();
        setCountryData(data);
        
      } catch (err) {
        console.error(err);
        // Handle the error, e.g., display an error message
      }
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