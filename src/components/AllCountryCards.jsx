import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsGlobeAmericas } from "react-icons/bs";
import SearchCountry from './SearchCountry';

const AllCountryCards = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/countries')
      .then((response) => {
        setCountryData(response.data);
      })
      .catch((error) => {
        console.error('Error finding data:', error);
      });
  }, []);

  const getCountryByName = async(countryName) => {
     try {
        const res = await fetch(`http://localhost:3000/countries/${countryName}`)
        if(!res.ok) throw new Error('Country not Found')

        const data = await res.json()
        setCountryData([data])
     } 
     catch(err) {
       console.error(err)
     }
  }


  return (
    <div className="container-fluid py-5 bg-dark">
      <div className="container d-flex justify-content-evenly bg-dark bg-gradient p-3 rounded-top">
        <h1 className="display-3 text-light"><BsGlobeAmericas className="mb-2 mx-2"/>WorldWise</h1>
        <h3 className="fs-5 text-light pt-4">By Liam Ronan</h3>
      </div>
  
      <div className="justify-content-center pb-5">
        <SearchCountry onSearch={getCountryByName}/>
      </div>

      <div className="container">
        <div className="row">
          {countryData.map((country) => (
            <div key={country.cca3} className="col-lg-3 col-sm-6 mb-5">
              <div className="card h-100 bg-black rounded-3 hover-zoom"> 
                <img src={country.flags.png} className="card-img-top h-100" alt="..."/>
                <div className="card-body bg-black text-light rounded-bottom-5">
                  <h5 className="card-title fs-2 fw-bold mb-3">{country.name.common}</h5>
                  <h6 className="card-text fw-light">Region: {country.region}</h6>
                  <h6 className="card-text fw-light">Sub-Region: {country.subregion}</h6>
                  <h6 className="card-text fw-light">Capital: {country.capital}</h6>
                  <h6 className="card-text fw-light">Population: {country.population}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-dark">

      </footer>
    </div>
  );
};

export default AllCountryCards;
