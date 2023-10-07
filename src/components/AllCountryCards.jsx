import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  return (
    <div className="container-fluid py-5 bg-dark">
      <div className="container">
        <div className="row">
          {countryData.map((country) => (
            <div className="col-lg-3 col-sm-6 mb-5">
              <div className="card h-100 bg-black rounded-3">
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
    </div>
  );
};

export default AllCountryCards;
