import React from 'react';
import { BsGlobeAmericas } from "react-icons/bs";

const Heading = () => {
  return (
    <>
        <div className="d-flex justify-content-evenly">
            <h1 className="display-3 text-light"><BsGlobeAmericas className="mb-2 mx-2"/>WorldWise</h1>
            <h3 className="fs-5 text-light pt-4">By Liam Ronan</h3>
        </div>
    </>
  )
}

export default Heading;
