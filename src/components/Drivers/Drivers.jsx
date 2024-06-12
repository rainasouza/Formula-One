import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Pagination, Table, Form, Button} from 'react-bootstrap';
import { format, parseISO } from 'date-fns';



const Drivers = () => {
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredDrivers, setFilteredDrivers] = useState([]);
    const itemsPerPage = 30;
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState('');



    useEffect(() => {
        axios.get('https://ergast.com/api/f1/drivers.json?limit=860').then(response => {
            setDrivers(response.data.MRData.DriverTable.Drivers);
            setFilteredDrivers(response.data.MRData.DriverTable.Drivers);
            setLoading(false)
        })

    },[])
    if(loading) {
        <p>cCarregando...</p>
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
      };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const filtered = drivers.filter(driver =>
            driver.givenName.toLowerCase().includes(query.toLowerCase()) ||
            driver.familyName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredDrivers(filtered)
        setCurrentPage(1);
    }
//calculating the pages
const indexOfLastItem = itemsPerPage * currentPage
const indexOfFirstItem = indexOfLastItem - itemsPerPage
const currentDrivers= filteredDrivers.slice(indexOfFirstItem, indexOfLastItem)
     


  return (
    <div>Drivers
        <Form className="d-flex mb-3" onSubmit={handleSearchSubmit}>
            <Form.Control
                      type="search"
                      placeholder="Search by first or last name!"
                      className="me-2"
                      aria-label="Search"
                      value={query}
                      onChange={handleSearchChange}/>
                <Button variant="outline-success" type="submit">Search</Button>        
        
        </Form>
        <Table responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date Of Birth</th>
                    <th>Nationality</th>
                    <th>Biography</th>

                </tr>
            </thead>
            <tbody>
                {Array.isArray(currentDrivers) && currentDrivers.map((driver) => (
                    <tr key={driver.driverId}>
                        <td>{driver.givenName} {driver.familyName}</td>
                        <td>{driver.dateOfBirth ? format(parseISO(driver.dateOfBirth), 'MMMM do, yyyy') : '-'}
                        </td>
                        <td>{driver.nationality}</td>
                        <td><a href={driver.url}>{driver.url}</a></td>

                    </tr>
                ))}
            </tbody>
        </Table>

        <Pagination size='sm'>
            {[...Array(Math.ceil(filteredDrivers.length / itemsPerPage)).keys()].map(pageNumber => (
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
  )
}

export default Drivers