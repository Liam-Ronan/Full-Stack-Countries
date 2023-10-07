import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountryDetail = ({ countryName }) => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (countryName) { // Check if countryName is not null or undefined
        console.log('Received countryName:', countryName);
      axios.get(`http://localhost:3000/countries/${countryName}`)
        .then((response) => {
          setCountryData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching country data:', error);
        });
    }
  }, [countryName]);

  // Render a loading message or conditionally render details when countryData is available
  if (!countryData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <h2>{countryData.name.common}</h2>
            </div>
            <div className="col-md-6 col-sm-6">
              <img src={countryData.flags.png} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;