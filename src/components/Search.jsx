import { Container, Row, Col, Form } from "react-bootstrap";

export const Search = ({ searchQuery, handleSearchInputChange, handleSearchSubmit }) => {

  
  return (
    <Container fluid className="mb-4 mb-sm-0">
      <Row>
        <Col lg={10} md={10} sm={10}>
          <Form onSubmit={handleSearchSubmit} className="text-dark">
            <Form.Group className="form-floating rounded-3">
              <Form.Control
                type="text"
                className="form-control rounded-3 border border-3"
                placeholder="Search Country..."
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <Form.Label>Search Country</Form.Label>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};