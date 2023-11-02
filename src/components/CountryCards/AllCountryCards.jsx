import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Search } from '../Search';
import Countries from './CountryCard';
import axios from 'axios';

const AllCountryCards = () => {
  const [countryData, setCountryData] = useState([]);
  const allCountriesURL = 'https://restcountries.com/v3.1/all'
  const [searchQuery, setSearchQuery] = useState(''); 
  const [filteredCountries, setFilteredCountries] = useState([]);


  /* useEffect hook to fetch data from back-end & updates setCountryData with the fetched data */
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

  
  /* Defined functions to handle search input */
  //Called when user types in the input field, updates state with the user's input
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //Called when user submits search form, filters the countryData based on search query, and updates filteredCountries
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Filter countries based on search query
    const filtered = countryData.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredCountries(filtered); // Update the filtered countries
  };

  const countriesToMap = searchQuery ? filteredCountries : countryData;

  return (
    
    <div className="bg-colour vh-100">
         <div className="container-fluid bg-colour pt-5">

          <Header />
            <Search
              searchQuery={searchQuery}
              handleSearchInputChange={handleSearchInputChange}
              handleSearchSubmit={handleSearchSubmit}
            />
          <Countries countries={countriesToMap} />

        </div>
    </div>
  );
};

export default AllCountryCards;
