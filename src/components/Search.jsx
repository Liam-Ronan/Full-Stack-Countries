import { Form } from 'react-bootstrap'

export const Search = ({ searchQuery, handleSearchInputChange, handleSearchSubmit }) => {

  
  return (
      <Form onSubmit={handleSearchSubmit} className="w-50 text-dark">
        <Form.Group className="form-floating rounded-3">
          <Form.Control
            type="text"
            className="form-control rounded-3"
            placeholder="Search Country..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <Form.Label>Search Country</Form.Label>
        </Form.Group>
      </Form>
  );
};