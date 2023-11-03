import React from 'react';
import { Link } from 'react-router-dom';

const Countries = ({ countries }) => {
  return (
    <div className="container pt-5">
          <div className="row">

              {countries.map((country) => (
              <div key={country.cca3} className="col-md-3 col-sm-6 mb-5 p-4">
                <Link className="text-decoration-none" to={`/${country.name.common}`} state={{countryData: country}}>
                <div className="card h-100 rounded-bottom-5 hover-zoom"> 
                    <img src={country.flags.png} className="card-img-top h-100" alt="..."/>
                    <div className="card-body rounded-bottom-5 text-light">
                      <h5 className="px-3 display-5 fs-5 fw-bold">{country.name.common}</h5>
                    </div>
                  </div>
                </Link>
              </div>
              ))}
              
          </div>
        </div>
  );
};

export default Countries;
