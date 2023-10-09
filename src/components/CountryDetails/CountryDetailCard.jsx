import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetailCard = ({ countryData }) => {
  return (
    <div className="container-fluid bg-colour">
        <div className="row py-1 d-flex justify-content-center bg-colour">

            <h1 className='display-5 fw-normal text-light d-flex justify-content-center pb-5 mb-5'>{countryData.name.common}</h1>

            <div className="col-md-3 col-sm-8 text-light">
            <p className='mx-5 pt-4 fw-normal'>Region: {countryData.region}</p>
            <p className='mx-5 pt-4 fw-normal'>Sub-Region: {countryData.subregion}</p>
            <p className='mx-5 pt-4 fw-normal'>Capital: {countryData.capital}</p>
            <p className='mx-5 pt-4 fw-normal'>Population: {countryData.population.toLocaleString()}</p>
            </div>

            <div className="col-md-3 col-sm-8 p-4">
            <img src={countryData.flags.png} className='h-100' alt="" />
            </div>

            <div className="container d-flex justify-content-center mt-4 pb-5 mb-5">
            <Link className="text-decoration-none btn btn-outline-light mt-5 mb-5 w-25" to="/">Back</Link>
            </div>

        </div>
    </div>
 
  );
};

export default CountryDetailCard;
