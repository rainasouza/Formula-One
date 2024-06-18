import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Pagination, Form, Container } from 'react-bootstrap';

const Constructor = () => {
  const [constructors, setConstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredConstructors, setFilteredConstructors] = useState([]);
  const itemsPerPage = 15;

  useEffect(() => {
    axios.get('https://ergast.com/api/f1/constructors.json?limit=212').then(response => {
        setConstructors(response.data.MRData.ConstructorTable.Constructors);
        setFilteredConstructors(response.data.MRData.ConstructorTable.Constructors);
        setLoading(false);
    });
}, []);




  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };



  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filtered = constructors.filter(constructor =>
      constructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      constructor.nationality.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredConstructors(filtered);
    setCurrentPage(1);
  };

  // Calculating the pages
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredConstructors.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Container className="py-4">

        <Form className="d-flex mb-3" onSubmit={handleSearchSubmit}>
          <Form.Control
            type="search"
            placeholder="Search by name or nacionality!"
            className="me-2"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>

        <div className="table-responsive">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Constructor</th>
                <th>Nationality</th>
                <th>More About</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(currentItems) && currentItems.map(constructor => (
                <tr key={constructor.constructorId}>
                  <td>{constructor.name}</td>
                  <td>
                  {constructor && constructor.nationality}
                  </td>
                  <td>
                  <a href={constructor.url}>History</a>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <Pagination size='sm'>
        {[...Array(Math.ceil(filteredConstructors.length / itemsPerPage)).keys()].map(pageNumber => (
            <Pagination.Item
              key={pageNumber + 1}
              active={pageNumber + 1 === currentPage}
              onClick={() => handlePageChange(pageNumber + 1)}
            >
              {pageNumber + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>


    </div>
  );
};

export default Constructor;
