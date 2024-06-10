import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Pagination, Form } from 'react-bootstrap';

const Constructor = () => {
  const [constructors, setConstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredConstructors, setFilteredConstructors] = useState([]);
  const itemsPerPage = 15;

  useEffect(() => {
    axios.get('http://ergast.com/api/f1/constructors.json?limit=212')
      .then(response => {
        setConstructors(response.data.MRData.ConstructorTable.Constructors);
        setFilteredConstructors(response.data.MRData.ConstructorTable.Constructors);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching constructors:', error);
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
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <Form className="d-flex mb-3" onSubmit={handleSearchSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Button variant="outline-success" type="submit">Search</Button>
      </Form>

      <h1>Constructors</h1>
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
                <a href={constructor.url}>{constructor && constructor.url}</a>
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


    </div>
  );
};

export default Constructor;
