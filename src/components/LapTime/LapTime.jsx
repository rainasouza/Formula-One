import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Table } from 'react-bootstrap';
import { format, parseISO } from 'date-fns';
import './LapTime.css';

const LapTime = () => {
    const [loading, setLoading] = useState(false);
    const [season, setSeason] = useState('');
    const [round, setRound] = useState('');
    const [lap, setLap] = useState('');
    const [lapsData, setLapsData] = useState([]);
    const [race, setRace] = useState(null);
    const [error, setError] = useState('');

    const handleChangeSeason = (e) => setSeason(e.target.value);
    const handleChangeRound = (e) => setRound(e.target.value);
    const handleChangeLap = (e) => setLap(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLapsData([]);
        setRace(null);
        setLoading(true);
        setError('');
    };

    useEffect(() => {
        const fetchData = async () => {
            if (season && round && lap) {
                try {
                    const response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/laps/${lap}.json`);
                    const data = response.data.MRData.RaceTable.Races[0]?.Laps[0]?.Timings || [];
                    setLapsData(data);

                    const raceResponse = await axios.get(`https://ergast.com/api/f1/${season}/${round}.json`);
                    const raceData = raceResponse.data.MRData.RaceTable.Races[0] || null;
                    setRace(raceData);
                } catch (err) {
                    setError('Error fetching data. Please verify if the values are correct and try again.');
                } finally {
                    setLoading(false);
                }
            }
        };

        if (loading) {
            fetchData();
        }
    }, [season, round, lap, loading]);

    return (
        <div className="lap-time-container">
            <h2 className="lap-time-title">Lap Time</h2>
            <Form onSubmit={handleSubmit} className="lap-time-form">
                <Form.Group className="mb-3">
                    <Form.Label>Season</Form.Label>
                    <Form.Control type="number" value={season} onChange={handleChangeSeason} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Race Number</Form.Label>
                    <Form.Control type="number" value={round} onChange={handleChangeRound} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Lap Number</Form.Label>
                    <Form.Control type="number" value={lap} onChange={handleChangeLap} required />
                </Form.Group>
                <Button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Fetch Data'}
                </Button>
            </Form>

            {error && <p className='laps-error'>{error}</p>}

            {race && (
                <div className="race-info">
                    <h3>Race Information</h3>
                    <p><strong>Race Name:</strong> {race.raceName}</p>
                    <p><strong>Circuit Name:</strong> {race.Circuit.circuitName}</p>
                    <p><strong>Location:</strong> {race.Circuit.Location.locality}, {race.Circuit.Location.country}</p>
                    <p><strong>Date:</strong> {format(parseISO(race.date), 'MMMM do, yyyy')}</p>
                </div>
            )}

            {lapsData.length > 0 && (
                <Table striped bordered hover className="laps-table">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Driver ID</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lapsData.map((lap, position) => (
                            <tr key={position}>
                                <td>{lap.position}</td>
                                <td>{lap.driverId}</td>
                                <td>{lap.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default LapTime;
