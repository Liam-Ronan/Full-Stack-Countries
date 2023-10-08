import React, { useEffect, useState } from 'react';
import { BsGlobeAmericas } from "react-icons/bs";
import { Link } from 'react-router-dom';


const AllCountryCards = () => {
  const [countryData, setCountryData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query
  const [filteredCountries, setFilteredCountries] = useState([]);

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

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle form submission
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
    <div className="bg-colour py-5">
        <div className="container d-flex justify-content-evenly p-5">
              <h1 className="fw-bolder fs-1 text-light"><BsGlobeAmericas className="mb-2 mx-2"/>WorldWise</h1>
              <h3 className="fs-5 text-light mt-3">By Liam Ronan</h3>
        </div>
      <hr className='w-100 border border-2 opacity-75' />
      <div className="bg-colour container p-5 rounded-top">

      <div className="justify-content-center pb-5">
        <div className="container d-flex justify-content-center input-group mb-3">
            <form className="w-50" onSubmit={handleSearchSubmit}>
                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Search Country..." value={searchQuery} onChange={handleSearchInputChange}/>
                    <label>Search Country</label>
                </div>
          </form>
        </div>
      </div>
    
      <div className="container text-decoration-none">
        <div className="row">
            {countriesToMap.map((country) => (
            <div key={country.cca3} className="col-md-3 col-sm-6 mb-5">
              <Link className="text-decoration-none" to={`/${country.name.common}`} state={{countryData: country}}>
              <div className="card h-100 bg-black rounded-3 hover-zoom"> 
                  <img src={country.flags.png} className="card-img-top h-100" alt="..."/>
                  <div className="card-body bg-black text-light rounded-bottom-5">
                    <h5 className="p-1 fs-4">{country.name.common}</h5>
                  </div>
                </div>
              </Link>
            </div>
            ))}

        </div>
      </div>
      </div>
      <footer className="bg-dark">

      </footer>
    </div>
  );
};

export default AllCountryCards;
