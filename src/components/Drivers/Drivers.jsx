import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { Table, Form, Button, Container, Row, Col } from 'react-bootstrap';

const Drivers = () => {
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredDrivers, setFilteredDrivers] = useState([]);
    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState('');

    useEffect(() => {
        axios.get('https://ergast.com/api/f1/drivers.json?limit=860').then(response => {
            setDrivers(response.data.MRData.DriverTable.Drivers);
            setFilteredDrivers(response.data.MRData.DriverTable.Drivers);
            setLoading(false);
        });
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const filtered = drivers.filter(driver =>
            driver.givenName.toLowerCase().includes(query.toLowerCase()) ||
            driver.familyName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredDrivers(filtered);
        setCurrentPage(1);
    };

    // Calculating the pages
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentDrivers = filteredDrivers.slice(indexOfFirstItem, indexOfLastItem);

    // Number of pages
    const totalPages = Math.ceil(filteredDrivers.length / itemsPerPage);

    // Pagination range
    const pageRange = 5; // Number of pagination items to show

    // Generate an array of pages to display
    const getPageRange = () => {
        let start = Math.max(1, currentPage - Math.floor(pageRange / 2));
        let end = Math.min(totalPages, start + pageRange - 1);

        // Adjust start again to keep the range of pageRange items
        start = Math.max(1, end - pageRange + 1);

        return Array.from({ length: (end - start) + 1 }, (_, idx) => start + idx);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Container className="py-4">
            <h2 className="mb-3">Drivers</h2>
            <Row className="mb-3">
                <Col>
                    <Form onSubmit={handleSearchSubmit}>
                        <Form.Group className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search by first or last name"
                                value={query}
                                onChange={handleSearchChange}
                                className="me-2"
                            />
                            <Button variant="outline-success" type="submit">
                                Search
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date Of Birth</th>
                                <th>Nationality</th>
                                <th>Biography</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentDrivers.map((driver) => (
                                <tr key={driver.driverId}>
                                    <td>
                                        {driver.givenName} {driver.familyName}
                                    </td>
                                    <td>
                                        {driver.dateOfBirth
                                            ? format(parseISO(driver.dateOfBirth), 'MMMM do, yyyy')
                                            : '-'}
                                    </td>
                                    <td>{driver.nationality}</td>
                                    <td>
                                        <a href={driver.url} target="_blank" rel="noopener noreferrer">
                                            Biography
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-center">
                        <nav>
                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                </li>
                                {getPageRange().map((pageNumber) => (
                                    <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => handlePageChange(pageNumber)}>
                                            {pageNumber}
                                        </button>
                                    </li>
                                ))}
                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Drivers;
