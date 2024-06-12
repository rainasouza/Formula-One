import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { Table, Button, Modal, Pagination } from 'react-bootstrap';
import './Schedule.css'

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedRace, setSelectedRace] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  useEffect(() => {
    axios.get('https://ergast.com/api/f1/2024.json')
      .then(response => {
        setSchedules(response.data.MRData.RaceTable.Races);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching schedules:', error);
        setLoading(false);
      });
  }, []);

  const handleShowModal = (race) => {
    setSelectedRace(race);
    setShowModal(true);
  }

  const handleCloseModal = () => setShowModal(false);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
//claculating the pages
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = schedules.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <div className="table-responsive">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Grand Prix</th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(currentItems) && currentItems.map(race => (
              <tr key={race.round}>
                <td>{race.raceName}</td>
                <td>
                  <Button variant="primary" onClick={() => handleShowModal(race)}>
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Pagination>
        {[...Array(Math.ceil(schedules.length / itemsPerPage)).keys()].map(pageNumber => (
          <Pagination.Item
            key={pageNumber + 1}
            active={pageNumber + 1 === currentPage}
            onClick={() => handlePageChange(pageNumber + 1)}
          >
            {pageNumber + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedRace && selectedRace.raceName} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRace && (
            <div>
              <h5>First Practice</h5>
              <p>Date: {selectedRace.FirstPractice ? format(parseISO(selectedRace.FirstPractice.date), 'MMMM do, yyyy') : 'N/A'}</p>
              <p>Time: {selectedRace.FirstPractice ? format(parseISO(`${selectedRace.FirstPractice.date}T${selectedRace.FirstPractice.time}`), 'hh:mm a') : 'N/A'}</p>

              <h5>Second Practice</h5>
              <p>Date: {selectedRace.SecondPractice ? format(parseISO(selectedRace.SecondPractice.date), 'MMMM do, yyyy') : 'N/A'}</p>
              <p>Time: {selectedRace.SecondPractice ? format(parseISO(`${selectedRace.SecondPractice.date}T${selectedRace.SecondPractice.time}`), 'hh:mm a') : 'N/A'}</p>
              {selectedRace.ThirdPractice && (
                <div>
                    <h5>Third Practice</h5>
                    <p>Date: {selectedRace.ThirdPractice ? format(parseISO(selectedRace.ThirdPractice.date), 'MMMM do, yyyy') : 'N/A'}</p>
                    <p>Time: {selectedRace.ThirdPractice ? format(parseISO(`${selectedRace.ThirdPractice.date}T${selectedRace.ThirdPractice.time}`), 'hh:mm a') : 'N/A'}</p>
                </div>
              )}


              {selectedRace.Sprint && (
                <div>
                  <h5>Sprint</h5>
                  <p>Date: {format(parseISO(selectedRace.Sprint.date), 'MMMM do, yyyy')}</p>
                  <p>Time: {format(parseISO(`${selectedRace.Sprint.date}T${selectedRace.Sprint.time}`), 'hh:mm a')}</p>
                </div>
              )}

              <h5>Race</h5>
              <p>Date: {selectedRace.Qualifying ? format(parseISO(selectedRace.Qualifying.date), 'MMMM do, yyyy') : 'N/A'}</p>
              <p>Time: {selectedRace.Qualifying ? format(parseISO(`${selectedRace.Qualifying.date}T${selectedRace.Qualifying.time}`), 'hh:mm a') : 'N/A'}</p>
            </div>
          )}
        </Modal.Body>

      </Modal>
    </div>
  );
}

export default Schedule;
