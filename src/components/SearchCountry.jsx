import React from 'react';
import { BsSearch } from "react-icons/bs";

const SearchCountry = () => {
  return (
    <>
        <div className="container input-group mt-5 w-75">
            <span className="input-group-text"><BsSearch/></span>
                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Search Country"/>
                    <label>Search Country</label>
                </div>
        </div>
    </>
  )
}

export default SearchCountry;
