import React, { useEffect, useState } from 'react';
import { BsGlobeAmericas } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css'

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
    
    <div className="bg-colour py-5">
        <div className="container d-flex justify-content-evenly p-5">
              <h1 className="fw-bolder fs-1 text-light"><BsGlobeAmericas className="mb-2 mx-2"/>WorldWise</h1>
              <h3 className="fs-5 text-light mt-3">By Liam Ronan</h3>
        </div>
      <hr className='w-100 border border-2 opacity-75' />
      <div className="bg-colour container p-5 rounded-top">

        
          <div className="row py-5 d-flex justify-content-center mb-5">
              
                {countryData ? (
              <>
              <div className="container bg-colour d-flex justify-content-center pb-5">
              <h1 className='display-5 fw-bold text-light'>{countryData.name.common}</h1>
              </div>
                  <div className="col-md-4 text-light p-5 fs-5 fw-light">
                        <p className=''>Region: {countryData.region}</p>
                        <p className=''>Sub-Region: {countryData.subregion}</p>
                        <p className=''>Capital: {countryData.capital}</p>
                        <p className=''>Population: {countryData.population.toLocaleString()}</p>
                    </div>
                    <div className="col-md-4 p-4">
                      <img src={countryData.flags.png} className='h-100' alt="" />
                    </div>

                    <div className="bg-colour container-fluid pt-5">
                      <div className="row d-flex justify-content-center">
                      <Link className="text-decoration-none btn btn-outline-light w-25" to="/">Back</Link> 
                      </div>                 
                    </div>
              </>
              ) : (
                <p className='text-light fs-3'>Loading...</p>
              )}
          </div>
        </div>
    </div>
  );
};

export default CountryDetail;