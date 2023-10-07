import React from "react";
import Heading from "./Heading";
import SearchCountry from "./SearchCountry";

const Navbar = () => {
  return (
    <div className="container-fluid py-5 bg-dark bg-gradient">
        <div className="container">
            <nav>
                <Heading />
                <SearchCountry />
            </nav>
        </div>
    </div>
  );
}

export default Navbar;

