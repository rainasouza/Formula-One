import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Form, Button, Table } from 'react-bootstrap';


const Winners = () => {
    const [season, setSeason] = useState('');
    const [winners, setWinners] = useState([]);
    const [waiting, setWaiting] = useState(true);
    const handleChangeSeason = (e) => setSeason(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        setWaiting(true);
        setWinners([])
        
    }

    useEffect(() => {
        const fetchWinners = async () => {
            if(season) {    
                try{
                    const response = await axios.get(`https://ergast.com/api/f1/${season}/results/1.json`)
                    const data = response.data.MRData.RaceTable.Races || [];
                    setWinners(data);
                } finally{
                    setWaiting(false)
                }   
            }

        }
        if(waiting){
            fetchWinners()
        }
    
    }, [season, waiting])

  return (
    <div>Winners
        <Form className="d-flex mb-3" onSubmit={handleSubmit}>
            <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      value={season}
                      onChange={handleChangeSeason}/>
                <Button variant="outline-success" type="submit">Search</Button>        
        </Form>


        {Array.isArray(winners) && winners.length > 0 && (
        <Table striped bordered hover>
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

export default Winners