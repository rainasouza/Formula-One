import React, { useState, useEffect } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {  Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleShowModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

 

  const facts = [
    "Just like pilots, Formula One drivers need a special license to compete. It's called a Super Licence, and it's only awarded to drivers who've proven their skills and experience in lower racing series.",
    "The iconic Monaco track might be known for its tight corners, but it's not actually the shortest. That title belongs to Zandvoort in the Netherlands.",
    "Unlike cars you see on the road, Formula One cars only have one fuel tank and have to strategically race the entire distance without refuelling.",
    "Formula One engines are incredibly powerful, generating massive amounts of heat.  Some parts of the engine can reach scorching temperatures exceeding 1000 degrees Celsius!"
  ];

  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % facts.length);
    }, 4500); 
  
    return () => clearInterval(interval);
  }, [facts.length]);
  

  const cards = [
    {
      title: 'Alpine',
      text: "Alpine, rebranded from Renault F1 in 2021, competes in Formula 1 with a focus on performance and innovation, featuring a distinctive blue livery.",
      img: 'https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-A523-04.jpg.ximg.medium.webp/733012cd90.webp',
      team: 'Renault',
      modalData: {
        name: 'BWT Alpine F1 Team',
        base: 'Enstone, United Kingdom',
        chief: 'Bruno Famin',
        entry: '1986',
        championships: 2,
        poles: 20,
        url: 'https://www.alpine-cars.co.uk/formula-1/a523.html',
      },
    },
    {
      title: 'Aston Martin',
      text: "Aston Martin returned to Formula 1 in 2021, known for its iconic green livery and ambitious goals, blending rich motorsport heritage with modern engineering excellence.",
      img: 'https://assets.astonmartinf1.com/public/cms/1vWYcxAuJkweP1Pb6DRM4e/fccb76b4831f0949ddbaadb2acbbeedc/Shot_2_copy.jpg?&h=540&w=640&fit=thumb',
      team: 'Mercedes',
      modalData: {
        name: 'Aston Martin Aramco F1 Team',
        base: 'Silverstone, United Kingdom',
        chief: 'Mike Krack',
        entry: '2018',
        championships: 0,
        poles: 1,
        url: 'https://www.astonmartinf1.com/en-GB/',
      },
    },
    {
      title: 'Ferrari',
      text: 'Ferrari, the most storied team in Formula 1. Known for its iconic red cars, Ferrari boasts a legacy of innovation, passion, and numerous championships.',
      img: 'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/0x0/4e3063dc-7800-4dd3-b761-e450b58da479.jpg?v=148',
      team: 'Scuderia Ferrari',
      modalData: {
        name: 'Scuderia Ferrari',
        base: 'Maranello, Italy',
        chief: 'Frédéric Vasseur',
        entry: '1950',
        championships: 16,
        poles: 250,
        url: 'https://www.ferrari.com/en-EN/formula1',
      },
    },
    {
      title: 'Haas',
      text: "Haas, the American Formula 1 team, joined the grid in 2016,  and aims to be a competitive midfield contender while representing the United States on the global racing stage.",
      img: 'https://fluidideas.s3.eu-west-1.amazonaws.com/haas/s3fs-public/styles/landscape_small_desktop_1x/public/2024-02/vf24-2.jpg?VersionId=4iaECK1e.Fg4ZByxB2RjOT0j5oxmrO_u',
      team: 'Ferrari',
      modalData: {
        name: 'MoneyGram Haas F1 Team',
        base: 'Kannapolis, United States',
        chief: 'Ayao Komatsu',
        entry: 2016,
        championships: 0,
        poles: 1,
        url: 'https://www.haasf1team.com/',
      },
    },
    {
      title: 'Kick Sauber',
      text: ' Renowned for nurturing young talent, Sauber has a history of resilience and adaptability, consistently competing as an independent team in the fiercely competitive world of F1.',
      img: 'https://s2-ge.glbimg.com/uNIo_m-3omWL5YJdzhII0-2sBZE=/0x0:3840x2160/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/c/B/YtfIAlSxCK5plEBkwZxw/gfmjmv9wmaau5rq.jpg',
      team: 'Ferrari',
      modalData: {
        name: 'Stake F1 Team Kick Sauber',
        base: 'Hinwil, Switzerland',
        chief: 'Alessandro Alunni Bravi',
        entry: 1993,
        championships: 0,
        poles: 1,
        url: 'https://www.sauber-group.com/feed?section=2024-spanish-grand-prix-preview&d=Racing',
      },
    },
    {
      title: 'McLaren',
      text: "McLaren boasts a rich history since its founding in the 60s by Bruce McLaren. The team's distinctive papaya orange livery has been a hallmark on the grid.",
      img: 'https://mclaren.bloomreach.io/cdn-cgi/image/width=1024,quality=80,format=webp/delivery/resources/content/gallery/mclaren-racing/formula-1/2024/whatever-it-takes/web/2024-f1-livery-launch-web-hero-mobile.jpg',
      team: 'Mercedes',
      modalData: {
        name: 'McLaren Formula 1 Team',
        base: 'Woking, United Kingdom',
        chief: 'Andre Stella',
        entry: 1966,
        championships: 8,
        poles: 157,
        url: 'https://www.mclaren.com/racing/',
      },
    },
    {
      title: 'Mercedes',
      text: "Mercedes-AMG Petronas Formula One Team, commonly known as Mercedes, renowned for their technical prowess and consistent success in recent years.",
      img: 'https://images.ctfassets.net/1fvlg6xqnm65/4gb5nvMiyKYztYgaibjo5t/84ed556e6fa4b17c8c48fcf0193572d8/2_FrontQTR_LH.jpg?w=640&q=75&fm=webp',
      team: 'Mercedes',
      modalData: {
        name: 'Mercedes-AMG PETRONAS F1 Team',
        base: 'Brackley, United Kingdom',
        chief: 'Toto Wolff',
        entry: 1970,
        championships: 8,
        poles: 130,
        url: 'https://www.mercedesamgf1.com/',
      },
    },
    {
      title: 'Visa Cash App RB',
      text: "Scuderia AlphaTauri, also known as Scuderia Toro Rosso, is an Italian F1 racing team that serves as a junior team to Red Bull Racing. ",
      img: 'https://cdn-1.motorsport.com/images/amp/6l9XlLx0/s1000/daniel-ricciardo-vcarb-01.jpg',
      team: 'Honda RBPT',      
      modalData: {
        name: 'Visa Cash App RB Formula One Team',
        base: 'Faenza, Italy',
        chief: 'Laurent Mekies',
        entry: 1985,
        championships: 0,
        poles: 1,
        url: 'https://www.visacashapprb.com/en/',
      },
    },
    
    {
      title: 'RedBull',
      text: "Red Bull Racing, owned by company Red Bull, have been highly competitive in F1, winning championships with drivers like Sebastian Vettel and Max Verstappen.",
      img: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2023/Red%20Bull/RB20%20launch/SI202402140542_hires_jpeg_24bit_rgb',
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
      text: "Williams Racing has a rich history in motorsport, renowned for its engineering prowess and past successes. Founded by Sir Frank Williams and Sir Patrick Head in 1977, the team has won multiple championships.",
      img: 'https://cdn.williamsf1.tech/images/fnx611yr/production/0e9b5bcba0a3fc8fa194c73be7b5c04747e9a60d-8337x5558.jpg?h=960&auto=format',
      team: 'Mercedes',
      modalData: {
        name: 'Oracle Red Bull Racing',
        base: 'Grove, United Kingdom',
        chief: 'James Vowles',
        entry: 1978,
        championships: 9,
        poles: 128,
        url: 'https://www.williamsf1.com/',
      },
    },
  ];

  return (
    <div className='body'>
      <br></br><br></br>
      <main >
      <section className="text-center container fact-cards">
      <div className="py-lg-5">
        <div className="col-lg-8 col-md-10 mx-auto">
          <h1 className="fw-light">Did you know?</h1>
          <Row className="justify-content-center">
            <Col md={6} lg={4} className="mb-4">
              <Card className="fact-card">
                <Card.Body>
                  <Card.Text>{facts[currentFactIndex]}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </section>
<br></br>
        <div >
          <Container >
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {cards.map((card, index) => (
                <Col key={index}>
                  <Card className="card" >
                    <Card.Img variant="top" src={card.img} alt={`Image of ${card.title}`} className="cardImgTop" />
                    <Card.Body className="card-body">
                      <Card.Text className="card-text">{card.text}</Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        <Button className='button-a' size="sm" onClick={() => handleShowModal(card.modalData)}>
                          About
                        </Button>
                        <small className="little-text">{card.team}</small>
                      </div>
                    </Card.Body>
                  </Card>
                  <br></br>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <br></br>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header  closeButton className="modalHeader">
            <Modal.Title className="modalTitle">{modalData.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <p><b>Base:</b> {modalData.base}</p>
            <p><b>Team Chief:</b> {modalData.chief}</p>
            <p><b>First Team Entry:</b> {modalData.entry}</p>
            <p><b>World Championships:</b> {modalData.championships}</p>
            <p><b>Pole Positions:</b> {modalData.poles}</p>
            <p>Know more about it <a href={modalData.url} >here</a>.</p>
          </Modal.Body>
        </Modal>
      </main>
      <br></br>

      <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center text-muted mb-0 py-3">
               {new Date().getFullYear()} Developed by Raína Araújo. 
            </p>
            <p className="text-center text-muted mb-0 py-3">
              I have it, I have it printed out!
            </p>
          </div>
        </div>
      </div>
    </footer>







    </div>
  );
};

export default Home;
