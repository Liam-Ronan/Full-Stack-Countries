import { BsGlobeAmericas, BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

export const Header = () => {
  return (
    <Container fluid className="pt-5 p-4 bg-colour mb-sm-0">
      
        <Row className="d-flex justify-content-between align-items-center text-center flex-column flex-sm-row">
          <Col xs="8" sm="6" md="8" className="text-center text-sm-start">
            <Link to={'/'} className='text-decoration-none'>
              <h1 className="fw-bolder text-dark">
                <BsGlobeAmericas className="mb-2 mx-2"/>WorldWise
              </h1>
            </Link>
          </Col>
          <Col xs="8" sm="6" md="4" className="text-center text-sm-end">
            <a href="https://github.com/Liam-Ronan" className="text-decoration-none">
              <h5 className="text-dark mb-3 fw-light">
                <BsGithub className="align-content-center mx-2 mb-1 fs-3"/>By Liam Ronan
              </h5>
            </a>
          </Col>
        </Row>

    </Container>
  )
}
