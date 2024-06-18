import React from 'react';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';


import './About.css';

const About = () => {
  return (
    <div className="about-container">
    <Alert variant="danger">
      <Alert.Heading>Hey, nice to see a tifosi!</Alert.Heading>
      <p>
      This project doesn't have any commercial purpose and it was made only for educational and research purposes. It is using the  <a href="https://ergast.com/mrd/"> Ergast API</a>, which is now deprecated, being update until the end of the 2024 season then shutdown at the end of the year. Learn more about the API <a href="https://ergast.com/mrd/terms/"> here</a>.
      </p>
      <hr />
      <p className="mb-0">
      This website is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V.
      </p>
      <hr/>
      <p>
      The images that appear here are from each scuderia's website, which are credited in the modal that also appears with the information.      
      </p>
      <hr/>
      <p>
      If you see any inconsistence or bugs here, please let me know.
      </p>
      <a href='https://github.com/rainasouza/'>My Github Page</a>
    </Alert>


    </div>
  );
};

export default About;
