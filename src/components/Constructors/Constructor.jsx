import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Form, Button, Container, Row, Col } from 'react-bootstrap';

const Constructor = () => {
    const [constructors, setConstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredConstructors, setFilteredConstructors] = useState([]);
    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

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

    // Number of pages
    const totalPages = Math.ceil(filteredConstructors.length / itemsPerPage);

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
            <h2 className="mb-3">Constructors</h2>
            <Row className="mb-3">
                <Col>
                    <Form onSubmit={handleSearchSubmit}>
                        <Form.Group className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search by name or nationality"
                                value={searchQuery}
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
                                <th>Constructor</th>
                                <th>Nationality</th>
                                <th>More About</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(constructor => (
                                <tr key={constructor.constructorId}>
                                    <td>{constructor.name}</td>
                                    <td>{constructor.nationality}</td>
                                    <td>
                                        <a href={constructor.url}>History</a>
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

export default Constructor;
