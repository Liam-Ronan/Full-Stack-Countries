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
    <div className="container-fluid py-5 bg-dark bg-gradient">
      <div className="container">
        <div className="row">
          {countryData.map((country) => (
            <a href="#" className='col-md-3 col-sm-3 mb-3 text-decoration-none'>
                <div key={country.cca3} className="">
                    <div className="card bg-dark">
                        <img src={country.flags.png} className="img-fluid"/>
                        <div className="card-body">
                        <h5 className="card-title fs-5 text-light fw-light">{country.name.common}</h5>
                        </div>
                    </div>
                </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCountryCards;
