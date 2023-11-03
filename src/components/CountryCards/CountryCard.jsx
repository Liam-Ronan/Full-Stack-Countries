import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap'

const Countries = ({ countries }) => {
  return (
    <Container className='pt-5'>
          <Row>

              {countries.map((country) => (

                <Col md={3} sm={6} key={country.cca3} className="mb-3 p-4">

                  <Link className="text-decoration-none" to={`/${country.name.  common}`} state={{countryData: country}}>

                    <Card className="h-100 rounded-bottom-5 hover-zoom"> 
                        <Card.Img variant='top' src={country.flags.png} className="h-100" alt="..." />
                        <Card.Body className="rounded-bottom-5">
                          <Card.Text className="px-1 fw-normal fs-5 text-light">{country.name.common}</Card.Text>
                        </Card.Body>
                    </Card>

                  </Link>

                </Col>

              ))}
              
          </Row>
    </Container>
  );
};

export default Countries;
