import { Container, Row, Col, Form } from "react-bootstrap";

const Regions = ({ onSelect }) => {

  const selectHandler = (e) => {
    const regionName = e.target.value;
    console.log(e.target.value);
    onSelect(regionName);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form.Select onChange={selectHandler} className='p-3 rounded-3'>
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
    
  )
}

export default Regions;
