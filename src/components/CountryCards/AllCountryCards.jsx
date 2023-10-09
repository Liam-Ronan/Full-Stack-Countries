import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Search } from '../Search';
import Countries from './CountryCard';

const AllCountryCards = () => {
  const [countryData, setCountryData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [filteredCountries, setFilteredCountries] = useState([]);

  /* useEffect hook to fetch data from back-end & updates setCountryData with the fetched data */
  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const res = await fetch(`http://localhost:3000/countries`)  
        const data = await res.json();
        setCountryData(data);
      } 
      catch(err) {
        console.error(err)
      }
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
