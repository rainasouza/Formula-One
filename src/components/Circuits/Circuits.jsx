import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination, Table, Form, Button } from 'react-bootstrap';

const Circuits = () => {
  const [loading, setLoading] = useState(true);
  const [circuits, setCircuits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [filteredCircuits, setFilteredCircuits] = useState([]);
  const itemsPerPage = 15;

  useEffect(() => {
    axios.get('https://ergast.com/api/f1/circuits.json?limit=77')
      .then(response => {
        setCircuits(response.data.MRData.CircuitTable.Circuits);
        setFilteredCircuits(response.data.MRData.CircuitTable.Circuits);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filtered = circuits.filter(circuit =>
      circuit.circuitName.toLowerCase().includes(query.toLowerCase()) ||
      circuit.Location.locality.toLowerCase().includes(query.toLowerCase()) ||
      circuit.Location.country.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCircuits(filtered);
    setCurrentPage(1);
  };

  // Calculating the pages
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCircuits.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="body">

      <Form className="form-container" onSubmit={handleSearchSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="form-control"
          aria-label="Search"
          value={query}
          onChange={handleSearchChange}
        />
        <Button variant="outline-success" type="submit">Search</Button>
      </Form>

      <Table striped bordered hover responsive className="table">
        <thead>
          <tr>
            <th>Circuit</th>
            <th>Location</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(currentItems) && currentItems.map((circuit) => (
            <tr key={circuit.circuitId}>
              <td>{circuit.circuitName}</td>
              <td>{circuit.Location.locality}, {circuit.Location.country}</td>
              <td>
                <a href={circuit.url} target="_blank" rel="noopener noreferrer">More info</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination size='sm' className="pagination">
        {[...Array(Math.ceil(filteredCircuits.length / itemsPerPage)).keys()].map(pageNumber => (
          <Pagination.Item
            key={pageNumber + 1}
            active={pageNumber + 1 === currentPage}
            onClick={() => handlePageChange(pageNumber + 1)}
          >
            {pageNumber + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      </div>


  );
}

export default Circuits;
