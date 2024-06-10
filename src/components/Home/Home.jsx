import React, { useState } from 'react';
import styles from './Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleShowModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const cards = [
    {
      title: 'Alpine',
      text: 'Alpine may be a relatively new name to Formula 1, but Renault’s famous sportscar arm has plenty of motorsport heritage.',
      img: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/content/dam/fom-website/manual/DriverAndTeamImages/2024/2065862959_16by9Centre',
      team: 'Renault',
      modalData: {
        name: 'BWT Alpine F1 Team',
        base: 'Enstone, United Kingdom',
        chief: 'Bruno Famin',
        entry: '1986',
        championships: 2,
        poles: 20,
        url: 'https://www.formula1.com/en/teams/Alpine/Year%5Fby%5FYear.html',
      },
    },
    {
      title: 'Aston Martin',
      text: 'With a two-time champion leading their driver line-up, Aston Martin are very much a team to watch…',
      img: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/content/dam/fom-website/manual/DriverAndTeamImages/2024/2053204844_16by9Centre',
      team: 'Mercedes',
      modalData: {
        name: 'Aston Martin Aramco F1 Team',
        base: 'Silverstone, United Kingdom',
        chief: 'Mike Krack',
        entry: '2018',
        championships: 0,
        poles: 1,
        url: 'https://www.formula1.com/en/teams/aston-martin',
      },
    },
    {
      title: 'Ferrari',
      text: 'The only team to have competed in every season since the world championship began.',
      img: 'https://storage.googleapis.com/static.elsoldemexico.com.mx/elesto/2024/05/Ferrari-tendra-decoracion-especial-para-el-GP-de-Miami.png',
      team: 'Scuderia Ferrari',
      modalData: {
        name: 'Scuderia Ferrari',
        base: 'Maranello, Italy',
        chief: 'Frédéric Vasseur',
        entry: '1950',
        championships: 16,
        poles: 250,
        url: 'https://www.formula1.com/en/teams/Ferrari/Year%5Fby%5FYear.html',
      },
    },
    {
      title: 'Haas',
      text: 'The youngest team on the grid, Haas made their debut in 2016. Also became the first all-American-led F1 squad in 3 decades.',
      img: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/content/dam/fom-website/manual/DriverAndTeamImages/2024/2068767588_16by9North',
      team: 'Ferrari',
      modalData: {
        name: 'MoneyGram Haas F1 Team',
        base: 'Kannapolis, United States',
        chief: 'Ayao Komatsu',
        entry: 2016,
        championships: 0,
        poles: 1,
        url: 'https://www.formula1.com/en/teams/haas',
      },
    },
    {
      title: 'Kick Sauber',
      text: 'Known for their competitive spirit, Kick Sauber is consistently working towards improving their standing in Formula One.',
      img: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/content/dam/fom-website/manual/DriverAndTeamImages/2024/2047992871_16by9North',
      team: 'Ferrari',
      modalData: {
        name: 'Stake F1 Team Kick Sauber',
        base: 'Hinwil, Switzerland',
        chief: 'Alessandro Alunni Bravi',
        entry: 1993,
        championships: 0,
        poles: 1,
        url: 'https://www.formula1.com/en/teams/kick-sauber',
      },
    },
    {
      title: 'McLaren',
      text: 'Since entering the sport in 1966 under the guidance of founder Bruce, McLaren\'s success has been nothing short of breathtaking.',
      img: 'https://pubimg.band.uol.com.br/files/9766cf5beccf814e7e02.jpeg',
      team: 'Mercedes',
      modalData: {
        name: 'McLaren Formula 1 Team',
        base: 'Woking, United Kingdom',
        chief: 'Andre Stella',
        entry: 1966,
        championships: 8,
        poles: 157,
        url: 'https://www.formula1.com/en/teams/McLaren/Year%5Fby%5FYear.html',
      },
    },
    {
      title: 'Mercedes',
      text: 'Mercedes\' modern F1 revival started a works squad for 2010 - the platform for a meteoric rise up the Grand Prix order.',
      img: 'https://www.the-race.com/content/images/2024/02/M410697.jpg',
      team: 'Mercedes',
      modalData: {
        name: 'Mercedes-AMG PETRONAS F1 Team',
        base: 'Brackley, United Kingdom',
        chief: 'Toto Wolff',
        entry: 1970,
        championships: 8,
        poles: 130,
        url: 'https://www.formula1.com/en/teams/Mercedes/Year%5Fby%5FYear.html',
      },
    },
    {
      title: 'Visa Cash App RB',
      text: 'Originally named Toro Rosso and then AlphaTauri, Visa Cash App RB were formed from the ashes of the plucky Minardi team.',
      img: 'https://cdn-1.motorsport.com/images/amp/6l9XlLx0/s1000/daniel-ricciardo-vcarb-01.jpg',
      team: 'Honda RBPT',      
      modalData: {
        name: 'Visa Cash App RB Formula One Team',
        base: 'Faenza, Italy',
        chief: 'Laurent Mekies',
        entry: 1985,
        championships: 0,
        poles: 1,
        url: 'https://www.formula1.com/en/teams/RB/Year%5Fby%5FYear.html',
      },
    },
    
    {
      title: 'RedBull',
      text: 'RedBull were no strangers to F1 - as sponsors - prior to formally entering as a works team in 2004.',
      img: 'https://s2-autoesporte.glbimg.com/_EVRiUWyrGWmbXXjIIJoSx9eGSg=/0x0:1200x715/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2023/w/H/NdD2S6S9mSWxXA4RofMg/red-bull-f1-rb.jpg',
      team: 'Honda RBPT',
      modalData: {
        name: 'Oracle Red Bull Racing',
        base: 'Milton Keynes, United Kingdom',
        chief: 'Christian Horner',
        entry: 1997,
        championships: 6,
        poles: 103,
        url: 'https://www.formula1.com/en/teams/Red-Bull-Racing/Year%5Fby%5FYear.html',
      },
    },
    {
      title: 'Williams',
      text: 'Driven on by the brilliance and passion of the late Sir Frank Williams, Williams grew from humble beginnings to become a Formula 1 behemoth.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdKPRafkSWED0PhtURAsdCGebs4lTiV3xSQ&s',
      team: 'Mercedes',
      modalData: {
        name: 'Oracle Red Bull Racing',
        base: 'Grove, United Kingdom',
        chief: 'James Vowles',
        entry: 1978,
        championships: 9,
        poles: 128,
        url: 'https://www.formula1.com/en/teams/Williams/Year%5Fby%5FYear.html',
      },
    },
  ];

  return (
    <div className={styles.back}>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Did you know?</h1>
              <br />
              <p className="lead text-body-secondary">
                that a Formula One car can go from 0 to 100 mph (0 to 160 km/h) and back to 0 in just about 5 seconds? This incredible acceleration is a testament to the power and engineering of these racing machines. Formula One cars are designed to reach extremely high speeds and handle intense forces, making them some of the fastest accelerating vehicles in the world.
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <Container>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {cards.map((card, index) => (
                <Col key={index}>
                  <Card className={`${styles.card} text-white bg-dark mb-3`} onClick={() => handleShowModal(card.modalData)}>
                    <Card.Img variant="top" src={card.img} alt={`Image of ${card.title}`} />
                    <Card.Body>
                      <Card.Text>{card.text}</Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        <Button variant="outline-secondary" size="sm" onClick={() => handleShowModal(card.modalData)}>
                          About
                        </Button>
                        <small className="text-white">{card.team}</small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{modalData.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><b>Base:</b> {modalData.base}</p>
            <p><b>Team Chief:</b> {modalData.chief}</p>
            <p><b>First Team Entry:</b> {modalData.entry}</p>
            <p><b>World Championships:</b> {modalData.championships}</p>
            <p><b>Pole Positions:</b> {modalData.poles}</p>
            <p>Know more about it <a href={modalData.url} target="_blank" rel="noopener noreferrer">here</a>.</p>
          </Modal.Body>

        </Modal>
      </main>
    </div>
  );
};

export default Home;
