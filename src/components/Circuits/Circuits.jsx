import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Circuits.module.css'

const Circuits = () => {
  const [loading, setLoading] = useState(true);
  const [circuits, setCircuits] = useState([]);

  useEffect(() => {
    axios.get('https://ergast.com/api/f1/circuits.json')
    .then(response => {
      setCircuits(response.data.MRData.CircuitTable.Circuits)
      setLoading(false);

    })
  }, [])
  if(loading){
    return <p>Carregando</p>
  }

  return (
    <div>
      <h1>Circuits</h1>
      {Array.isArray(circuits)&& circuits.map(circuit => (
        <li key={circuit.circuitId}>
          <h2>{circuit.circuitName}</h2>
          <p>Location: {circuit.Location.locality}, {circuit.Location.country}</p>
        </li>
      ))}
    </div>
  )
}

export default Circuits
