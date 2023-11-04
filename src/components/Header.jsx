import { BsGlobeAmericas } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";

export const Header = () => {
  return (
    
    <Container fluid className="d-flex justify-content-evenly py-5 bg-colour">
          <Link to={'/'} className='text-decoration-none'><h1 className="fw-bolder fs-1 text-light"><BsGlobeAmericas className="mb-2 mx-2"/>WorldWise</h1></Link>

          <h3 className="fs-5 text-light mt-3 fw-light">By Liam Ronan</h3>
    </Container>
    
  )
}
