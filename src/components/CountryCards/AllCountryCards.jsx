import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Search } from '../Search';
import Countries from './CountryCard';
import axios from 'axios';
import Regions from '../Regions';

import { Row, Col} from 'react-bootstrap';

const AllCountryCards = () => {
  const [countryData, setCountryData] = useState([]);
  const allCountriesURL = 'https://restcountries.com/v3.1/all'
  const [searchQuery, setSearchQuery] = useState(''); 
  const [filteredCountries, setFilteredCountries] = useState([]);

  /* useEffect hook to fetch data & updates setCountryData with the fetched data */
  // Getting all countries
  useEffect(() => {
    const getAllCountries = () => {
      axios.get(allCountriesURL)
      .then(res => {
        setCountryData(res.data);
      })
      .catch(err => {
        console.error(err)
      })
    }
  
    getAllCountries()
  }, []);

  //Getting countries by region
  const countriesByRegion = (regionName) => {
      
      if(regionName === 'all') {
        axios.get(allCountriesURL)
        .then(res => {
          setCountryData(res.data);
        })
        .catch(err => {
          console.error(err)
      })
      }
      else {
        axios.get(`https://restcountries.com/v3.1/region/${regionName}`)
        .then(res => {
          setCountryData(res.data)
        })
        .catch(err => {
          console.error(err);
        })
      }
  }

  /* Defined functions to handle search input */
  //Called when user types in the input field, updates state with the user's input
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //Called when user submits search form, filters the countryData based on search query, and updates filteredCountries
  const handleSearchSubmit = (e) => {
    e.preventDefault(); 

    // Filter countries based on search query
    const filtered = countryData.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredCountries(filtered); // Update the filtered countries
  };

  const countriesToMap = searchQuery ? filteredCountries : countryData;

  return (
         
      <>
        <Header />

          <Row className='pt-3'>
            <Col sm={10} className='px-4'>
              <Search
                searchQuery={searchQuery}
                handleSearchInputChange={handleSearchInputChange}
                handleSearchSubmit={handleSearchSubmit}
              />
            </Col>
            <Col sm={2} className='px-4'>
              <Regions onSelect={countriesByRegion}/>
            </Col>
          </Row>
        
        <Countries countries={countriesToMap} />
      </>
  );
};

export default AllCountryCards;
