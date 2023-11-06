import { BsGlobeAmericas } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

export const Header = () => {
  return (
    <Container fluid className="pt-5 p-4 bg-colour mb-sm-0">
      
        <Row className="d-flex justify-content-evenly align-items-center text-center">
          <Col xs="8" sm="6" md="8" className="text-start">
            <Link to={'/'} className='text-decoration-none'>
              <h1 className="fw-bolder fs-2 text-light">
                <BsGlobeAmericas className="mb-2 mx-2"/>WorldWise
              </h1>
            </Link>
          </Col>
          <Col xs="4" sm="6" md="4" className="text-end">
            <p className="text-light fs-5 mb-3 fw-light">By Liam Ronan</p>
          </Col>
        </Row>

    </Container>
  )
}
