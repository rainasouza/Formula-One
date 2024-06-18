import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import './Winners.css'; // Certifique-se de importar o arquivo CSS

const Winners = () => {
    const [season, setSeason] = useState('');
    const [winners, setWinners] = useState([]);
    const [waiting, setWaiting] = useState(true);
    const [error, setError] = useState('');

    const handleChangeSeason = (e) => {
      e.preventDefault();
      setSeason(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setWaiting(true);
        setWinners([]);
        setError('');
    }

    useEffect(() => {
        const fetchWinners = async () => {
            if (season) {    
                try {
                    const response = await axios.get(`https://ergast.com/api/f1/${season}/results/1.json`);
                    const data = response.data.MRData.RaceTable.Races || [];
                    setWinners(data);
                } catch (err) {
                    setError('Error fetching data. Please verify if the season is correct.');
                } finally {
                    setWaiting(false);
                }   
            }
        }

        if (waiting) {
            fetchWinners();
        }

    }, [season, waiting]);
        

    return (
        <div className="winners-container">
            <h2 className="winners-title">Say the season/year</h2>
            <Form className="winners-form" onSubmit={handleSubmit}>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={season}
                    onChange={handleChangeSeason} />
                <Button variant="outline-success" type="submit">Search</Button>        
            </Form>

            {error && <p className="winners-error">{error}</p>}
            {waiting && <p className="winners-loading"></p>}

            {Array.isArray(winners) && winners.length > 0 && (
                <Table className="winners-table" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Round</th>
                            <th>Race Name</th>
                            <th>Driver</th>
                            <th>Constructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {winners.map((race, index) => (
                            <tr key={index}>
                                <td>{race.round}</td>
                                <td>{race.raceName}</td>
                                <td>{race.Results[0].Driver.givenName} {race.Results[0].Driver.familyName}</td>
                                <td>{race.Results[0].Constructor.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default Winners;
