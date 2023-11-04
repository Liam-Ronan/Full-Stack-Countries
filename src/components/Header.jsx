import { BsGlobeAmericas } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
        <div className="container-fluid d-flex justify-content-evenly py-5 bg-colour">
              <Link to={'/'} className='text-decoration-none'><h1 className="fw-bolder fs-1 text-light"><BsGlobeAmericas className="mb-2 mx-2"/>WorldWise</h1></Link>

              <h3 className="fs-5 text-light mt-3 fw-light">By Liam Ronan</h3>
          </div>
    </>
  )
}
